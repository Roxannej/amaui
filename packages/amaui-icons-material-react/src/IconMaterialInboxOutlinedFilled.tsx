import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialInboxOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='InboxOutlinedFilled'
      short_name='Inbox'

      {...props}
    >
      <path d="M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM12 16Q12.975 16 13.738 15.438Q14.5 14.875 14.8 14H19V5Q19 5 19 5Q19 5 19 5H5Q5 5 5 5Q5 5 5 5V14H9.2Q9.5 14.875 10.262 15.438Q11.025 16 12 16Z"/>
    </Icon>
  )
});

export default IconMaterialInboxOutlinedFilled;
