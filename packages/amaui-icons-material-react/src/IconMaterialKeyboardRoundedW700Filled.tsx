import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKeyboardRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardRoundedW700Filled'
      short_name='Keyboard'

      {...props}
    >
      <path d="M4 20.15Q2.675 20.15 1.763 19.237Q0.85 18.325 0.85 17V7Q0.85 5.675 1.763 4.762Q2.675 3.85 4 3.85H20Q21.325 3.85 22.238 4.762Q23.15 5.675 23.15 7V17Q23.15 18.325 22.238 19.237Q21.325 20.15 20 20.15ZM11 10H13V8H11ZM11 13H13V11H11ZM8 10H10V8H8ZM8 13H10V11H8ZM5 13H7V11H5ZM5 10H7V8H5ZM9 16H15Q15.425 16 15.713 15.712Q16 15.425 16 15Q16 14.575 15.713 14.287Q15.425 14 15 14H9Q8.575 14 8.288 14.287Q8 14.575 8 15Q8 15.425 8.288 15.712Q8.575 16 9 16ZM14 13H16V11H14ZM14 10H16V8H14ZM17 13H19V11H17ZM17 10H19V8H17Z"/>
    </Icon>
  )
});

export default IconMaterialKeyboardRoundedW700Filled;
