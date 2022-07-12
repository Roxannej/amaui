import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNotificationsOffRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationsOffRoundedW700Filled'
      short_name='NotificationsOff'

      {...props}
    >
      <path d="M19.5 22.85 16.375 19.725H4.15Q3.5 19.725 3.038 19.263Q2.575 18.8 2.575 18.15Q2.575 17.5 3.038 17.038Q3.5 16.575 4.15 16.575H4.85V10.5Q4.85 9.925 4.925 9.438Q5 8.95 5.15 8.475L1.575 4.925Q1.225 4.575 1.225 4.087Q1.225 3.6 1.575 3.25Q1.925 2.9 2.413 2.9Q2.9 2.9 3.25 3.25L21.175 21.175Q21.525 21.525 21.525 22.012Q21.525 22.5 21.175 22.85Q20.825 23.2 20.338 23.2Q19.85 23.2 19.5 22.85ZM12.025 22.85Q11.075 22.85 10.4 22.188Q9.725 21.525 9.725 20.575H14.3Q14.3 21.525 13.638 22.188Q12.975 22.85 12.025 22.85ZM19.15 15.775 7.925 4.55Q8.375 4.275 8.863 4.05Q9.35 3.825 9.925 3.675V3.125Q9.925 2.25 10.525 1.65Q11.125 1.05 12 1.05Q12.875 1.05 13.475 1.65Q14.075 2.25 14.075 3.125V3.675Q16.2 4.175 17.675 6.112Q19.15 8.05 19.15 10.5Z"/>
    </Icon>
  )
});

export default IconMaterialNotificationsOffRoundedW700Filled;
