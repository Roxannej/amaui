import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAnalyticsOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AnalyticsOutlinedFilled'
      short_name='Analytics'

      {...props}
    >
      <path d="M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM7 17H9V12H7ZM15 17H17V7H15ZM11 17H13V14H11ZM11 12H13V10H11Z"/>
    </Icon>
  )
});

export default IconMaterialAnalyticsOutlinedFilled;
