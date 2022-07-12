import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddHomeOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddHomeOutlinedW700'
      short_name='AddHome'

      {...props}
    >
      <path d="M16.825 19.375h1.75v-2.5h2.5v-1.75h-2.5v-2.5h-1.75v2.5h-2.5v1.75h2.5ZM17.7 21q-2.075 0-3.537-1.462Q12.7 18.075 12.7 16q0-2.075 1.463-3.538Q15.625 11 17.7 11t3.538 1.462Q22.7 13.925 22.7 16q0 2.075-1.462 3.538Q19.775 21 17.7 21ZM3.15 19.85V6.575L12-.075l8.85 6.65V9.75q-.725-.35-1.513-.55Q18.55 9 17.7 9v-.85L12 3.875 6.3 8.15v8.55h4.425q.1.875.388 1.662.287.788.737 1.488ZM12 10.275Z"/>
    </Icon>
  )
});

export default IconMaterialAddHomeOutlinedW700;