import React from 'react';

import { useAmauiTheme } from '@amaui/style-react';

import { Transition } from '../Transition';
import { TTransitionStatus } from '../Transition/Transition';
import { is } from '@amaui/utils';

const Zoom = React.forwardRef((props: any, ref: React.MutableRefObject<any>) => {
  const amauiTheme = useAmauiTheme();

  const styles = {
    entering: {
      transform: `scale(1)`,
    },
    entered: {
      transform: 'none',
    },
    exiting: {
      transform: `scale(0)`
    },
    exited: {
      transform: `scale(0)`
    },
  };

  const timeout = (status: TTransitionStatus, property: string = 'opacity') => {
    const properties = {
      transform: amauiTheme.transitions.duration.smaller
    };

    return `${((is('simple', props.timeout) ? props.timeout : props.timeout[status]) || properties[property] - (status === 'exiting' ? 30 : 0))}ms`;
  };

  const timingFunction = (is('simple', props.timing_function) ? props.timing_function : props.timing_function[status]) || amauiTheme.transitions.timing_function.standard;

  return (
    <Transition
      {...props}
    >
      {(status: TTransitionStatus, ref_) => React.cloneElement(props.children, {
        ref: item => {
          if (ref) ref.current = item;

          if (ref_) ref_.current = item;
        },

        style: {
          ...(props.children.style || {}),

          transform: 'scale(0)',
          visibility: status === 'exited' && !props.in ? 'hidden' : undefined,

          transition: `transform ${timeout(status, 'transform')} ${timingFunction}`,

          ...(styles[status] || {}),
        }
      })}
    </Transition>
  );
});

export default Zoom;