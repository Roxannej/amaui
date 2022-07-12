import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPowerOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerOutlinedW700'
      short_name='Power'

      {...props}
    >
      <path d="M11.5 18.7H12.5V16.725L15.7 13.525V9.3Q15.7 9.3 15.7 9.3Q15.7 9.3 15.7 9.3H8.3Q8.3 9.3 8.3 9.3Q8.3 9.3 8.3 9.3V13.525L11.5 16.725ZM8.35 21.85V18.05L5.15 14.85V9.3Q5.15 8.15 5.775 7.287Q6.4 6.425 7.5 6.225V6.15V2.15H10.65V6.15H13.35V2.15H16.5V6.15V6.225Q17.6 6.425 18.225 7.275Q18.85 8.125 18.85 9.3V14.85L15.65 18.05V21.85ZM12 14Q12 14 12 14Q12 14 12 14Q12 14 12 14Q12 14 12 14Z"/>
    </Icon>
  )
});

export default IconMaterialPowerOutlinedW700;
