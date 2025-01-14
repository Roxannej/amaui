import React from 'react';

import is from '@amaui/utils/is';
import unique from '@amaui/utils/unique';

import { STATUS, TTransitionStatus } from '..';

export type TMode = 'in-out' | 'in-out-follow' | 'out-in';

export interface IProps {
  switch?: boolean;

  mode?: TMode;

  [p: string]: any;
}

const TransitionsContext = React.createContext(undefined);

function Transitions(props: IProps) {
  const [init, setInit] = React.useState(false);
  const [status, setStatus] = React.useState<TTransitionStatus>(STATUS.entered);
  const [children, setChildren] = React.useState(is('array', props.children) ? props.children : [props.children]);

  const other = {
    className: true,
    ...(props.TransitionProps || {})
  };

  const [element, setElement] = React.useState(React.cloneElement(props.children, { in: true, ...other }));

  React.useEffect(() => {
    setInit(true);
  }, []);

  // Regular
  React.useEffect(() => {
    if (!props.switch) {
      const newChildren: Array<React.ReactElement<any>> = is('array', props.children) ? props.children : [props.children];

      setChildren(items => {
        let newItems = unique([...items, ...newChildren], 'key');

        newItems = newItems.map(item => {
          const prev = items.find(item_ => item_.key === item.key);
          const next = newChildren.find(item_ => item_.key === item.key);
          const isExiting = !prev?.props.in;

          // New or readded previous add it
          if (next && (!prev || isExiting)) return React.cloneElement(item, { in: true, onExited: onExited(item), enterOnAdd: true, ...other });

          // No prev in new and it's not already exiting exit it
          if (!next && prev && !isExiting) return React.cloneElement(item, { in: false, ...other });

          return item;
        });

        return newItems;
      });
    }
  }, [props.children.length]);

  // Switch
  React.useEffect(() => {
    if (
      element !== props.children &&
      element.key !== props.children.key &&
      // Lets transition run properly
      status === 'entered'
    ) {
      setStatus(STATUS.exit);
    }
  }, [props.children.key]);

  const onExited = (element_: React.ReactElement<any>) => (elementHTML: HTMLElement) => {
    // Invoke a method
    if (is('function', element_.props.onExited)) element_.props.onExited(elementHTML);

    // Update
    setChildren(items => {
      const newItems = [...items];

      const index = newItems.findIndex(item => item?.key === element_?.key);

      if (index > -1) newItems.splice(index, 1);

      return newItems;
    });
  };

  let children_ = children;

  // Init
  if (!init && !props.switch) {
    children_ = children_.map(item => React.cloneElement(item, { in: true, onExited: onExited(item), ...other }))
  }

  // Switch
  if (props.switch) {
    children_ = element;

    switch (status) {
      case STATUS.enter:
        if (props.mode === 'in-out') {
          const newElement = React.cloneElement(props.children, { in: true, ...other });

          children_ = [
            React.cloneElement(children_, {
              in: false,

              onExited: () => {
                if (props.children.props?.onExited) props.children.props?.onExited();

                setStatus(STATUS.entered);
                setElement(newElement);
              },

              exitOnAdd: true,
              removeOnExited: true,

              ...other
            }),

            newElement
          ];
        }
        else if (props.mode === 'out-in') {
          children_ = (
            React.cloneElement(props.children, {
              in: true,

              onEntered: () => {
                if (props.children.props?.onEntered) props.children.props?.onEntered();

                setStatus(STATUS.entered);
                setElement(React.cloneElement(props.children, { in: true, ...other }));
              },

              enterOnAdd: true,

              ...other
            })
          );
        }

        break;

      case STATUS.exit:
        if (props.mode === 'in-out') {
          children_ = [
            element,

            React.cloneElement(props.children, {
              in: true,

              onEntered: () => {
                if (props.children.props?.onEnter) props.children.props?.onEnter();

                setStatus(STATUS.enter);
              },

              enterOnAdd: true,

              ...other
            })
          ];
        }
        else if (props.mode === 'out-in') {
          children_ = (
            React.cloneElement(children_, {
              in: false,

              onExited: () => {
                if (props.children.props?.onExited) props.children.props?.onExited();

                setStatus(STATUS.enter);
              },

              exitOnAdd: true,

              ...other
            })
          );
        }
        else if (props.mode === 'in-out-follow') {
          if (props.children.key === children_.key) return children_;

          children_ = [
            React.cloneElement(props.children, {
              in: true,

              onEntered: () => {
                if (props.children.props?.onEntered) props.children.props?.onEntered();

                setElement(React.cloneElement(props.children, { in: true, ...other }));
                setStatus(STATUS.entered);
              },

              enterOnAdd: true,

              ...other
            }),

            React.cloneElement(children_, {
              in: false,

              exitOnAdd: true,

              ...other
            })
          ];
        }

        break;

      default:
        break;
    }
  }

  return (
    <TransitionsContext.Provider value={null}>
      {children_}
    </TransitionsContext.Provider>
  );
};

Transitions.defaultProps = {
  mode: 'out-in'
} as IProps;

export default Transitions;
