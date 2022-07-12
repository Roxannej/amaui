import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMarkAsUnreadOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkAsUnreadOutlinedFilled'
      short_name='MarkAsUnread'

      {...props}
    >
      <path d="M4 17Q3.175 17 2.588 16.413Q2 15.825 2 15V7.15Q2 6.775 2.213 6.412Q2.425 6.05 2.8 5.85L10.5 2L18.05 5.85Q18.35 6 18.562 6.325Q18.775 6.65 18.85 7H15.925L10.5 4.25L4 7.475ZM7 21Q6.175 21 5.588 20.413Q5 19.825 5 19V10Q5 9.175 5.588 8.587Q6.175 8 7 8H20Q20.825 8 21.413 8.587Q22 9.175 22 10V19Q22 19.825 21.413 20.413Q20.825 21 20 21ZM13.5 15.35 20 12Q20 11.425 20 11Q20 10.575 20 10L13.5 13.35L7 10Q7 10.575 7 11Q7 11.425 7 12Z"/>
    </Icon>
  )
});

export default IconMaterialMarkAsUnreadOutlinedFilled;
