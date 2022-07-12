import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDevicesSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DevicesSharpW700Filled'
      short_name='Devices'

      {...props}
    >
      <path d="M1.625 21.15V17H3.625V2.85H21V6H6.775V17H11.625V21.15ZM13.225 21.15V7.625H22.375V21.15ZM15.625 17H20V10H15.625Z"/>
    </Icon>
  )
});

export default IconMaterialDevicesSharpW700Filled;
