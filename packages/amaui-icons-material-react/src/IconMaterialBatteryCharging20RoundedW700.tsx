import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatteryCharging20RoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryCharging20RoundedW700'
      short_name='BatteryCharging20'

      {...props}
    >
      <path d="M7.725 22.85Q7.05 22.85 6.6 22.4Q6.15 21.95 6.15 21.275V4.725Q6.15 4.05 6.6 3.6Q7.05 3.15 7.725 3.15H9.15V2.725Q9.15 2.075 9.613 1.612Q10.075 1.15 10.725 1.15H13.275Q13.925 1.15 14.388 1.612Q14.85 2.075 14.85 2.725V3.15H16.275Q16.95 3.15 17.4 3.6Q17.85 4.05 17.85 4.725V21.275Q17.85 21.95 17.4 22.4Q16.95 22.85 16.275 22.85ZM12.15 18.375 15.025 12.95Q15.25 12.55 15 12.162Q14.75 11.775 14.3 11.775H13.375V8.3Q13.375 7.675 12.762 7.512Q12.15 7.35 11.85 7.925L8.975 13.35Q8.75 13.75 9 14.15Q9.25 14.55 9.7 14.55H10.625V18Q10.625 18.625 11.238 18.775Q11.85 18.925 12.15 18.375Z"/>
    </Icon>
  )
});

export default IconMaterialBatteryCharging20RoundedW700;