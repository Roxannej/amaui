import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKeyboardOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardOutlinedFilled'
      short_name='Keyboard'

      {...props}
    >
      <path d="M4 19Q3.175 19 2.588 18.413Q2 17.825 2 17V7Q2 6.175 2.588 5.588Q3.175 5 4 5H20Q20.825 5 21.413 5.588Q22 6.175 22 7V17Q22 17.825 21.413 18.413Q20.825 19 20 19ZM11 10H13V8H11ZM11 13H13V11H11ZM8 10H10V8H8ZM8 13H10V11H8ZM5 13H7V11H5ZM5 10H7V8H5ZM8 16H16V14H8ZM14 13H16V11H14ZM14 10H16V8H14ZM17 13H19V11H17ZM17 10H19V8H17Z"/>
    </Icon>
  )
});

export default IconMaterialKeyboardOutlinedFilled;
