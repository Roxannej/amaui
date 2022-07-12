import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGrid4x4SharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Grid4x4SharpW700'
      short_name='Grid4x4'

      {...props}
    >
      <path d="M3.65 23.35V20.35H0.65V17.2H3.65V13.575H0.65V10.425H3.65V6.8H0.65V3.65H3.65V0.65H6.8V3.65H10.425V0.65H13.575V3.65H17.2V0.65H20.35V3.65H23.35V6.8H20.35V10.425H23.35V13.575H20.35V17.2H23.35V20.35H20.35V23.35H17.2V20.35H13.575V23.35H10.425V20.35H6.8V23.35ZM6.8 10.425H10.425V6.8H6.8ZM6.8 17.2H10.425V13.575H6.8ZM13.575 17.2H17.2V13.575H13.575ZM13.575 10.425H17.2V6.8H13.575Z"/>
    </Icon>
  )
});

export default IconMaterialGrid4x4SharpW700;
