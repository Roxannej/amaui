import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoDrinksOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoDrinksOutlinedW100'
      short_name='NoDrinks'

      {...props}
    >
      <path d="M3.65 3.65 20.35 20.35 19.85 20.85 12.35 13.35V19.65H16.7V20.35H7.3V19.65H11.65V12.75L10.85 11.85L3.15 4.15ZM7.1 4.3H19.25V5L13.85 11.05L13.375 10.575L15.925 7.7H10.5L9.8 7H16.55L18.35 5H7.8ZM11.925 9.125Z"/>
    </Icon>
  )
});

export default IconMaterialNoDrinksOutlinedW100;
