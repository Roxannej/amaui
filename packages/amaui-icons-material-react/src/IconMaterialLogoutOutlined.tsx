import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLogoutOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LogoutOutlined'
      short_name='Logout'

      {...props}
    >
      <path d="M9 11H17.175L14.625 8.45L16 7L21 12L16 17L14.625 15.55L17.175 13H9ZM12 3V5H5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19H12V21H5Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3Z"/>
    </Icon>
  )
});

export default IconMaterialLogoutOutlined;
