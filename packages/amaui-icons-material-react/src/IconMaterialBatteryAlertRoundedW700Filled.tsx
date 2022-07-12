import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatteryAlertRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryAlertRoundedW700Filled'
      short_name='BatteryAlert'

      {...props}
    >
      <path d="M7.725 22.85Q7.05 22.85 6.6 22.4Q6.15 21.95 6.15 21.275V4.725Q6.15 4.05 6.6 3.6Q7.05 3.15 7.725 3.15H9.15V2.725Q9.15 2.075 9.613 1.612Q10.075 1.15 10.725 1.15H13.275Q13.925 1.15 14.388 1.612Q14.85 2.075 14.85 2.725V3.15H16.275Q16.95 3.15 17.4 3.6Q17.85 4.05 17.85 4.725V21.275Q17.85 21.95 17.4 22.4Q16.95 22.85 16.275 22.85ZM12 18.525Q12.55 18.525 12.938 18.15Q13.325 17.775 13.325 17.225Q13.325 16.675 12.938 16.288Q12.55 15.9 12 15.9Q11.45 15.9 11.075 16.288Q10.7 16.675 10.7 17.225Q10.7 17.775 11.075 18.15Q11.45 18.525 12 18.525ZM12 14.65Q12.5 14.65 12.85 14.3Q13.2 13.95 13.2 13.45V8.7Q13.2 8.2 12.85 7.85Q12.5 7.5 12 7.5Q11.5 7.5 11.15 7.85Q10.8 8.2 10.8 8.7V13.45Q10.8 13.95 11.15 14.3Q11.5 14.65 12 14.65Z"/>
    </Icon>
  )
});

export default IconMaterialBatteryAlertRoundedW700Filled;
