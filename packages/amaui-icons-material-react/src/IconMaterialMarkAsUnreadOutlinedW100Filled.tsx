import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMarkAsUnreadOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkAsUnreadOutlinedW100Filled'
      short_name='MarkAsUnread'

      {...props}
    >
      <path d="M3.675 16.2Q3.375 16 3.175 15.688Q2.975 15.375 2.975 15V7.15Q2.975 6.925 3.088 6.75Q3.2 6.575 3.425 6.45L10.825 2.75L18.075 6.45Q18.275 6.525 18.375 6.725Q18.475 6.925 18.525 7.15H17.925L10.825 3.55L3.675 7.1ZM8.125 19.7Q7.475 19.7 7.05 19.275Q6.625 18.85 6.625 18.2V10.8Q6.625 10.15 7.05 9.725Q7.475 9.3 8.125 9.3H19.525Q20.175 9.3 20.6 9.725Q21.025 10.15 21.025 10.8V18.2Q21.025 18.85 20.6 19.275Q20.175 19.7 19.525 19.7ZM13.825 14.15 20.325 10.8Q20.325 10.6 20.238 10.438Q20.15 10.275 20.025 10.15L13.825 13.35L7.625 10.15Q7.5 10.275 7.412 10.438Q7.325 10.6 7.325 10.8Z"/>
    </Icon>
  )
});

export default IconMaterialMarkAsUnreadOutlinedW100Filled;
