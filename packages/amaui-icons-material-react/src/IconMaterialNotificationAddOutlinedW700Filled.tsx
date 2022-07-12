import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNotificationAddOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationAddOutlinedW700Filled'
      short_name='NotificationAdd'

      {...props}
    >
      <path d="M12.025 22.85Q11.075 22.85 10.4 22.188Q9.725 21.525 9.725 20.575H14.3Q14.3 21.525 13.638 22.188Q12.975 22.85 12.025 22.85ZM18.8 13V10.2H16V7.8H18.8V5H21.2V7.8H24V10.2H21.2V13ZM2.55 19.725V16.575H4.85V10.5Q4.85 8.075 6.238 6.162Q7.625 4.25 9.925 3.675V3.125Q9.925 2.25 10.525 1.65Q11.125 1.05 12 1.05Q12.875 1.05 13.475 1.65Q14.075 2.25 14.075 3.125V3.675Q14.475 3.775 14.888 3.937Q15.3 4.1 15.6 4.3Q14.65 5.225 14.1 6.437Q13.55 7.65 13.55 9Q13.55 11.475 15.15 13.262Q16.75 15.05 19.15 15.375V16.575H21.45V19.725Z"/>
    </Icon>
  )
});

export default IconMaterialNotificationAddOutlinedW700Filled;