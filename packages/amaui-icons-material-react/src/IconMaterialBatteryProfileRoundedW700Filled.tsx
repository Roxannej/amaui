import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatteryProfileRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryProfileRoundedW700Filled'
      short_name='BatteryProfile'

      {...props}
    >
      <path d="M3.05 23.15q-.65 0-1.112-.462-.463-.463-.463-1.113V4.425q0-.65.463-1.113Q2.4 2.85 3.05 2.85h1.875v-.425q0-.65.463-1.113Q5.85.85 6.5.85h2q.65 0 1.113.462.462.463.462 1.113v.425h1.875q.65 0 1.112.462.463.463.463 1.113v17.15q0 .65-.463 1.113-.462.462-1.112.462ZM4.625 20h5.75V6h-5.75Zm13.925-8.825-.775-1.7-1.675-.75q-.225-.125-.338-.313-.112-.187-.112-.412 0-.225.112-.413.113-.187.338-.312l1.675-.75.775-1.7q.125-.225.313-.338.187-.112.412-.112.225 0 .4.125.175.125.3.35l.775 1.675 1.675.75q.225.125.338.312.112.188.112.413 0 .225-.112.412-.113.188-.338.313l-1.675.75-.775 1.675q-.125.225-.3.35-.175.125-.4.125-.225 0-.412-.113-.188-.112-.313-.337Z"/>
    </Icon>
  )
});

export default IconMaterialBatteryProfileRoundedW700Filled;
