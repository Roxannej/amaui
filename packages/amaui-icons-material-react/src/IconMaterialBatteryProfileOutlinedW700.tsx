import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatteryProfileOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryProfileOutlinedW700'
      short_name='BatteryProfile'

      {...props}
    >
      <path d="M3.05 23.15q-.65 0-1.112-.462-.463-.463-.463-1.113V4.425q0-.65.463-1.113Q2.4 2.85 3.05 2.85h1.875v-2h5.15v2h1.875q.65 0 1.112.462.463.463.463 1.113v17.15q0 .65-.463 1.113-.462.462-1.112.462ZM4.625 20h5.75V6h-5.75Zm14.65-7.275-1.5-3.25L14.525 8l3.25-1.475 1.5-3.25 1.475 3.25L24 8l-3.25 1.475Z"/>
    </Icon>
  )
});

export default IconMaterialBatteryProfileOutlinedW700;
