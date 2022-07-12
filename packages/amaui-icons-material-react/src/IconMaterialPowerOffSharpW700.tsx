import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPowerOffSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerOffSharpW700'
      short_name='PowerOff'

      {...props}
    >
      <path d="M19.525 22.875 15.725 19.075 15.65 19.15V21.85H8.35V18.05L5.15 14.85V8.5L1.125 4.475L2.8 2.775L21.2 21.175ZM12.95 16.3 8.3 11.65V13.525L11.5 16.725V18.7H12.5V16.725ZM18.275 15.425 15.7 12.85V9.3H12.15L7.5 4.675V2.15H10.65V6.15H13.35V2.15H16.5V6.225H18.85V14.85ZM13.95 11.125ZM10.625 13.975Z"/>
    </Icon>
  )
});

export default IconMaterialPowerOffSharpW700;
