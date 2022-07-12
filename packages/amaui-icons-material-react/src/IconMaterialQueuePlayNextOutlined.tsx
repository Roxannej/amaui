import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialQueuePlayNextOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='QueuePlayNextOutlined'
      short_name='QueuePlayNext'

      {...props}
    >
      <path d="M19.5 22.5 18 21 21 18 18 15 19.5 13.5 24 18ZM8 21V19H4Q3.175 19 2.588 18.413Q2 17.825 2 17V5Q2 4.175 2.588 3.587Q3.175 3 4 3H20Q20.825 3 21.413 3.587Q22 4.175 22 5V12H20V5Q20 5 20 5Q20 5 20 5H4Q4 5 4 5Q4 5 4 5V17Q4 17 4 17Q4 17 4 17H17V19H15V21ZM11 15H13V12H16V10H13V7H11V10H8V12H11ZM12 11Q12 11 12 11Q12 11 12 11Q12 11 12 11Q12 11 12 11Q12 11 12 11Q12 11 12 11Z"/>
    </Icon>
  )
});

export default IconMaterialQueuePlayNextOutlined;
