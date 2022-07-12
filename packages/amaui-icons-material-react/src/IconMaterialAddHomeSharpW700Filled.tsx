import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddHomeSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddHomeSharpW700Filled'
      short_name='AddHome'

      {...props}
    >
      <path d="M17.7 21q-2.075 0-3.537-1.462Q12.7 18.075 12.7 16q0-2.075 1.463-3.538Q15.625 11 17.7 11t3.538 1.462Q22.7 13.925 22.7 16q0 2.075-1.462 3.538Q19.775 21 17.7 21Zm-.875-1.625h1.75v-2.5h2.5v-1.75h-2.5v-2.5h-1.75v2.5h-2.5v1.75h2.5ZM3.15 19.85V6.575L12-.075l8.85 6.65V9.75q-.725-.35-1.513-.55Q18.55 9 17.7 9q-2.9 0-4.95 2.05Q10.7 13.1 10.7 16q0 1.05.288 2.013.287.962.862 1.837Z"/>
    </Icon>
  )
});

export default IconMaterialAddHomeSharpW700Filled;
