import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKeyboardAltOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardAltOutlinedFilled'
      short_name='KeyboardAlt'

      {...props}
    >
      <path d="M3 21Q2.175 21 1.588 20.413Q1 19.825 1 19V6Q1 5.175 1.588 4.588Q2.175 4 3 4H21Q21.825 4 22.413 4.588Q23 5.175 23 6V19Q23 19.825 22.413 20.413Q21.825 21 21 21ZM9 10H11V8H9ZM5 10H7V8H5ZM8 17H16V16H8ZM13 10H15V8H13ZM9 14H11V12H9ZM5 14H7V12H5ZM13 14H15V12H13ZM17 10H19V8H17ZM17 14H19V12H17Z"/>
    </Icon>
  )
});

export default IconMaterialKeyboardAltOutlinedFilled;