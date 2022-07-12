import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNotificationsOffOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationsOffOutlinedFilled'
      short_name='NotificationsOff'

      {...props}
    >
      <path d="M4 19V17H6V10Q6 9.7 6.025 9.438Q6.05 9.175 6.1 8.9L1.4 4.2L2.8 2.8L21.2 21.2L19.8 22.6L16.15 19ZM18 15.15 8.2 5.35Q8.7 4.975 9.275 4.662Q9.85 4.35 10.5 4.2V3.5Q10.5 2.875 10.938 2.438Q11.375 2 12 2Q12.625 2 13.062 2.438Q13.5 2.875 13.5 3.5V4.2Q15.45 4.7 16.725 6.287Q18 7.875 18 10ZM12 22Q11.175 22 10.588 21.413Q10 20.825 10 20H14Q14 20.825 13.413 21.413Q12.825 22 12 22Z"/>
    </Icon>
  )
});

export default IconMaterialNotificationsOffOutlinedFilled;
