import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLogoutOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LogoutOutlinedW100Filled'
      short_name='Logout'

      {...props}
    >
      <path d="M9.3 12.3H18.1L15.85 10.05L16.35 9.55L19.45 12.65L16.35 15.75L15.85 15.25L18.1 13H9.3ZM12.3 4.3V5H6.05Q5.75 5 5.5 5.25Q5.25 5.5 5.25 5.8V19.5Q5.25 19.8 5.5 20.05Q5.75 20.3 6.05 20.3H12.3V21H6.05Q5.4 21 4.975 20.575Q4.55 20.15 4.55 19.5V5.8Q4.55 5.15 4.975 4.725Q5.4 4.3 6.05 4.3Z"/>
    </Icon>
  )
});

export default IconMaterialLogoutOutlinedW100Filled;