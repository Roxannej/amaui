import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMoveToInboxOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveToInboxOutlinedFilled'
      short_name='MoveToInbox'

      {...props}
    >
      <path d="M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM12 16Q12.95 16 13.725 15.45Q14.5 14.9 14.8 14H19V5Q19 5 19 5Q19 5 19 5H5Q5 5 5 5Q5 5 5 5V14H9.2Q9.5 14.9 10.275 15.45Q11.05 16 12 16ZM12 14 8 10 9.4 8.55 11 10.15V6H13V10.15L14.6 8.55L16 10Z"/>
    </Icon>
  )
});

export default IconMaterialMoveToInboxOutlinedFilled;
