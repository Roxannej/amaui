import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatteryProfileOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryProfileOutlinedW100Filled'
      short_name='BatteryProfile'

      {...props}
    >
      <path d="M7.05 20.45q-.325 0-.537-.213-.213-.212-.213-.537V5.825q0-.325.213-.538.212-.212.537-.212h1.5v-1.5h3.2v1.5h1.5q.325 0 .538.212.212.213.212.538V19.7q0 .325-.212.537-.213.213-.538.213Zm-.05-.7h6.3v-14H7Zm10.45-8.8-.75-1.7L15 8.5l1.7-.75.75-1.7.75 1.7 1.7.75-1.7.75Z"/>
    </Icon>
  )
});

export default IconMaterialBatteryProfileOutlinedW100Filled;