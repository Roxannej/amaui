import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKeyboardHideOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardHideOutlined'
      short_name='KeyboardHide'

      {...props}
    >
      <path d="M20 17H4Q3.175 17 2.588 16.413Q2 15.825 2 15V5Q2 4.175 2.588 3.587Q3.175 3 4 3H20Q20.825 3 21.413 3.587Q22 4.175 22 5V15Q22 15.825 21.413 16.413Q20.825 17 20 17ZM20 15Q20 15 20 15Q20 15 20 15V5Q20 5 20 5Q20 5 20 5H4Q4 5 4 5Q4 5 4 5V15Q4 15 4 15Q4 15 4 15ZM11 8H13V6H11ZM11 11H13V9H11ZM8 8H10V6H8ZM8 11H10V9H8ZM5 11H7V9H5ZM5 8H7V6H5ZM8 14H16V12H8ZM14 11H16V9H14ZM14 8H16V6H14ZM17 11H19V9H17ZM17 8H19V6H17ZM12 23 8 19H16ZM4 5Q4 5 4 5Q4 5 4 5V15Q4 15 4 15Q4 15 4 15Q4 15 4 15Q4 15 4 15V5Q4 5 4 5Q4 5 4 5Z"/>
    </Icon>
  )
});

export default IconMaterialKeyboardHideOutlined;
