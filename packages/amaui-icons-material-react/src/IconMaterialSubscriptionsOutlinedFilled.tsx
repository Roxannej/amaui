import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSubscriptionsOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubscriptionsOutlinedFilled'
      short_name='Subscriptions'

      {...props}
    >
      <path d="M7 4V2H17V4ZM4 7V5H20V7ZM4 22Q3.175 22 2.588 21.413Q2 20.825 2 20V10Q2 9.175 2.588 8.587Q3.175 8 4 8H20Q20.825 8 21.413 8.587Q22 9.175 22 10V20Q22 20.825 21.413 21.413Q20.825 22 20 22ZM10 19 16 15 10 11Z"/>
    </Icon>
  )
});

export default IconMaterialSubscriptionsOutlinedFilled;
