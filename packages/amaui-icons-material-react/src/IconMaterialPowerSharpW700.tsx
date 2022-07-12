import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPowerSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerSharpW700'
      short_name='Power'

      {...props}
    >
      <path d="M11.5 18.7H12.5V16.725L15.7 13.525V9.3H8.3V13.525L11.5 16.725ZM8.35 21.85V18.05L5.15 14.85V6.15H7.5V2.15H10.65V6.15H13.35V2.15H16.5V6.15H18.85V14.85L15.65 18.05V21.85ZM12 14V9.3V14Z"/>
    </Icon>
  )
});

export default IconMaterialPowerSharpW700;
