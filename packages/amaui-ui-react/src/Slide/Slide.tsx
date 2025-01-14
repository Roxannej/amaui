import React from 'react';

import is from '@amaui/utils/is';
import { useAmauiTheme } from '@amaui/style-react';

import { Transition, TTransitionStatus } from '..';

const Slide = React.forwardRef((props: any, ref: React.MutableRefObject<any>) => {
  const theme = useAmauiTheme();
  const refs = {
    root: React.useRef<HTMLElement>()
  };

  const translate = () => {
    const rect = refs.root?.current?.getBoundingClientRect();

    const h = props.root ? props.root.offsetHeight : window.innerHeight;
    const w = props.root ? props.root.offsetWidth : window.innerWidth;

    const top = props.root ? refs.root?.current?.offsetTop : rect?.top;
    const left = props.root ? refs.root?.current?.offsetLeft : rect?.left;
    const right = props.root ? refs.root?.current?.offsetLeft + refs.root?.current?.offsetWidth : rect?.right;
    const bottom = props.root ? refs.root?.current?.offsetTop + refs.root?.current?.offsetHeight : rect?.bottom;

    if (props.direction === 'up') return `translate(0, -${bottom !== undefined ? bottom + 'px' : '100vh'})`;

    if (props.direction === 'down') return `translate(0, ${top !== undefined ? Math.abs(h - top) + 'px' : '100vh'})`;

    if (props.direction === 'left') return `translate(-${right !== undefined ? right + 'px' : '100vw'}, 0)`;

    if (props.direction === 'right') return `translate(${left !== undefined ? w - left + 'px' : '100vw'}, 0)`;
  };

  const styles = {
    entering: {
      transform: 'translate(0, 0)',
    },
    exiting: {
      transform: translate()
    },
    exited: {
      transform: translate()
    }
  };

  const timeout = (status: TTransitionStatus, property: string = 'opacity') => {
    const properties = {
      transform: theme.transitions.duration.xs
    };

    return `${((is('simple', props.timeout) ? props.timeout : props.timeout[status]) || properties[property] - (status === 'exiting' ? 30 : 0))}ms`;
  };

  const timingFunction = status => (is('simple', props.timing_function) ? props.timing_function : props.timing_function[status]) || theme.transitions.timing_function.standard;

  return (
    <Transition
      {...props}

      enterOnAdd={!!refs.root.current}
    >
      {(status: TTransitionStatus, ref_) => React.cloneElement(props.children, {
        ref: item => {
          refs.root.current = item;

          if (ref) ref.current = item;

          if (ref_) ref_.current = item;
        },

        style: {
          transition: `transform ${timeout(status, 'transform')} ${timingFunction(status)}`,

          ...(styles[status] || {}),

          ...(props.children?.props?.style || {}),
        }
      })}
    </Transition>
  );
});

Slide.defaultProps = {
  direction: 'down'
};

export default Slide;
