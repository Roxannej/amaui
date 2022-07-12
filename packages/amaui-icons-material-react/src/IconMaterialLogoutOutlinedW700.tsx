import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLogoutOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LogoutOutlinedW700'
      short_name='Logout'

      {...props}
    >
      <path d="M8.55 10.425H16.225L13.825 8.025L16.025 5.8L22.2 12L16.025 18.2L13.825 15.975L16.225 13.575H8.55ZM12.2 2.15V5.3H4.95Q4.95 5.3 4.95 5.3Q4.95 5.3 4.95 5.3V18.7Q4.95 18.7 4.95 18.7Q4.95 18.7 4.95 18.7H12.2V21.85H4.95Q3.625 21.85 2.712 20.938Q1.8 20.025 1.8 18.7V5.3Q1.8 3.975 2.712 3.062Q3.625 2.15 4.95 2.15Z"/>
    </Icon>
  )
});

export default IconMaterialLogoutOutlinedW700;
