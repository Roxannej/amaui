import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialQueuePlayNextOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='QueuePlayNextOutlinedFilled'
      short_name='QueuePlayNext'

      {...props}
    >
      <path d="M11 15H13V12H16V10H13V7H11V10H8V12H11ZM19.5 22.5 18 21 21 18 18 15 19.5 13.5 24 18ZM8 21V19H4Q3.175 19 2.588 18.413Q2 17.825 2 17V5Q2 4.175 2.588 3.587Q3.175 3 4 3H20Q20.825 3 21.413 3.587Q22 4.175 22 5V12H17V19H15V21Z"/>
    </Icon>
  )
});

export default IconMaterialQueuePlayNextOutlinedFilled;
