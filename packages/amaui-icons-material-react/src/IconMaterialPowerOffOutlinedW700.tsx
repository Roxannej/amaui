import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPowerOffOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerOffOutlinedW700'
      short_name='PowerOff'

      {...props}
    >
      <path d="M19.525 22.875 15.725 19.075 15.65 19.15V21.85H8.35V18.05L5.15 14.85V9.275Q5.15 9.1 5.163 8.912Q5.175 8.725 5.225 8.575L1.125 4.475L2.8 2.775L21.2 21.175ZM12.95 16.3 8.3 11.65V13.525L11.5 16.725V18.7H12.5V16.725ZM18.275 15.425 15.7 12.85V9.3Q15.7 9.3 15.7 9.3Q15.7 9.3 15.7 9.3H12.15L7.5 4.675V2.15H10.65V6.15H13.35V2.15H16.5V6.225Q17.6 6.475 18.225 7.287Q18.85 8.1 18.85 9.3V14.85ZM13.95 11.125Q13.95 11.125 13.95 11.125Q13.95 11.125 13.95 11.125ZM10.625 13.975Z"/>
    </Icon>
  )
});

export default IconMaterialPowerOffOutlinedW700;