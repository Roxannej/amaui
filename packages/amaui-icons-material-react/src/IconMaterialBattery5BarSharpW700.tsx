import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBattery5BarSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery5BarSharpW700'
      short_name='Battery5Bar'

      {...props}
    >
      <path d="M5.975 23.15V2.85H9.425V0.85H14.575V2.85H18.025V23.15ZM9.125 10H14.875V6H9.125Z"/>
    </Icon>
  )
});

export default IconMaterialBattery5BarSharpW700;
