import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAtmOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AtmOutlinedW700Filled'
      short_name='Atm'

      {...props}
    >
      <path d="M9.7 15.2V10.7H7.825V8.8H13.45V10.7H11.575V15.2ZM1.425 15.2V10Q1.425 9.5 1.775 9.15Q2.125 8.8 2.625 8.8H5.625Q6.125 8.8 6.463 9.15Q6.8 9.5 6.8 10V15.2H4.925V13.7H3.3V15.2ZM3.3 11.8H4.925V10.7H3.3ZM14.55 15.2V10Q14.55 9.5 14.888 9.15Q15.225 8.8 15.725 8.8H21.375Q21.875 8.8 22.225 9.15Q22.575 9.5 22.575 10V15.2H20.7V10.7H19.5V14.2H17.625V10.7H16.425V15.2Z"/>
    </Icon>
  )
});

export default IconMaterialAtmOutlinedW700Filled;
