import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAtmOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AtmOutlinedW100Filled'
      short_name='Atm'

      {...props}
    >
      <path d="M10.65 14.6V10.1H8.4V9.4H13.6V10.1H11.35V14.6ZM2.65 14.6V10.1Q2.65 9.8 2.85 9.6Q3.05 9.4 3.35 9.4H6.15Q6.45 9.4 6.65 9.6Q6.85 9.8 6.85 10.1V14.6H6.15V12.85H3.35V14.6ZM3.35 12.15H6.15V10.1H3.35ZM15.15 14.6V10.1Q15.15 9.8 15.35 9.6Q15.55 9.4 15.85 9.4H20.65Q20.95 9.4 21.15 9.6Q21.35 9.8 21.35 10.1V14.6H20.65V10.1H18.6V13.6H17.9V10.1H15.85V14.6Z"/>
    </Icon>
  )
});

export default IconMaterialAtmOutlinedW100Filled;
