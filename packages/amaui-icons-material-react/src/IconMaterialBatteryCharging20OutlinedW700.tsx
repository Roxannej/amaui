import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatteryCharging20OutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryCharging20OutlinedW700'
      short_name='BatteryCharging20'

      {...props}
    >
      <path d="M7.725 22.85Q7.05 22.85 6.6 22.4Q6.15 21.95 6.15 21.275V4.725Q6.15 4.05 6.6 3.6Q7.05 3.15 7.725 3.15H9.15V1.15H14.85V3.15H16.275Q16.95 3.15 17.4 3.6Q17.85 4.05 17.85 4.725V21.275Q17.85 21.95 17.4 22.4Q16.95 22.85 16.275 22.85ZM10.625 21.225 15.65 11.775H13.375V5.075L8.35 14.55H10.625Z"/>
    </Icon>
  )
});

export default IconMaterialBatteryCharging20OutlinedW700;
