import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBattery3BarSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery3BarSharpW700Filled'
      short_name='Battery3Bar'

      {...props}
    >
      <path d="M5.975 23.15V2.85H9.425V0.85H14.575V2.85H18.025V23.15ZM9.125 14H14.875V6H9.125Z"/>
    </Icon>
  )
});

export default IconMaterialBattery3BarSharpW700Filled;
