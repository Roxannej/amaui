import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNatOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NatOutlinedW700'
      short_name='Nat'

      {...props}
    >
      <path d="M4 15.775Q2.475 15.775 1.35 14.65Q0.225 13.525 0.225 12Q0.225 10.425 1.35 9.325Q2.475 8.225 4 8.225Q5.2 8.225 6.175 8.938Q7.15 9.65 7.5 10.625H10.625V13.375H7.5Q7.15 14.35 6.175 15.062Q5.2 15.775 4 15.775ZM4 13Q4.425 13 4.713 12.712Q5 12.425 5 12Q5 11.575 4.713 11.287Q4.425 11 4 11Q3.575 11 3.288 11.287Q3 11.575 3 12Q3 12.425 3.288 12.712Q3.575 13 4 13ZM4.625 22.375V19.625Q7.95 19.625 10.287 17.387Q12.625 15.15 12.625 12Q12.625 8.825 10.287 6.6Q7.95 4.375 4.625 4.375V1.625Q8.75 1.625 11.75 4.237Q14.75 6.85 15.3 10.625H18.5L16.9 9.025L18.85 7.075L23.775 12L18.85 16.925L16.9 14.975L18.5 13.375H15.3Q14.75 17.15 11.75 19.762Q8.75 22.375 4.625 22.375Z"/>
    </Icon>
  )
});

export default IconMaterialNatOutlinedW700;