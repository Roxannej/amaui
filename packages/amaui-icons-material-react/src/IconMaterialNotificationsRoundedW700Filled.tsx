import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNotificationsRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationsRoundedW700Filled'
      short_name='Notifications'

      {...props}
    >
      <path d="M4.15 19.725Q3.5 19.725 3.038 19.263Q2.575 18.8 2.575 18.15Q2.575 17.5 3.038 17.038Q3.5 16.575 4.15 16.575H4.85V10.5Q4.85 8.075 6.238 6.162Q7.625 4.25 9.925 3.675V3.125Q9.925 2.25 10.525 1.65Q11.125 1.05 12 1.05Q12.875 1.05 13.475 1.65Q14.075 2.25 14.075 3.125V3.675Q16.4 4.25 17.775 6.162Q19.15 8.075 19.15 10.5V16.575H19.875Q20.525 16.575 20.988 17.038Q21.45 17.5 21.45 18.15Q21.45 18.8 20.988 19.263Q20.525 19.725 19.875 19.725ZM12.025 22.85Q11.075 22.85 10.4 22.188Q9.725 21.525 9.725 20.575H14.3Q14.3 21.525 13.638 22.188Q12.975 22.85 12.025 22.85Z"/>
    </Icon>
  )
});

export default IconMaterialNotificationsRoundedW700Filled;
