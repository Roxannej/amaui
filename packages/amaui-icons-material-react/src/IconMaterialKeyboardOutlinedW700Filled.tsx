import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKeyboardOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardOutlinedW700Filled'
      short_name='Keyboard'

      {...props}
    >
      <path d="M4 20.15Q2.675 20.15 1.763 19.237Q0.85 18.325 0.85 17V7Q0.85 5.675 1.763 4.762Q2.675 3.85 4 3.85H20Q21.325 3.85 22.238 4.762Q23.15 5.675 23.15 7V17Q23.15 18.325 22.238 19.237Q21.325 20.15 20 20.15ZM11 10H13V8H11ZM11 13H13V11H11ZM8 10H10V8H8ZM8 13H10V11H8ZM5 13H7V11H5ZM5 10H7V8H5ZM8 16H16V14H8ZM14 13H16V11H14ZM14 10H16V8H14ZM17 13H19V11H17ZM17 10H19V8H17Z"/>
    </Icon>
  )
});

export default IconMaterialKeyboardOutlinedW700Filled;
