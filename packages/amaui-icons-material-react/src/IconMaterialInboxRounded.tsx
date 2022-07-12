import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialInboxRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='InboxRounded'
      short_name='Inbox'

      {...props}
    >
      <path d="M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM5 19H19Q19 19 19 19Q19 19 19 19V16H16Q15.25 16.95 14.213 17.475Q13.175 18 12 18Q10.825 18 9.788 17.475Q8.75 16.95 8 16H5V19Q5 19 5 19Q5 19 5 19ZM12 16Q12.75 16 13.425 15.637Q14.1 15.275 14.575 14.5Q14.7 14.275 14.925 14.137Q15.15 14 15.45 14H19V5Q19 5 19 5Q19 5 19 5H5Q5 5 5 5Q5 5 5 5V14H8.55Q8.85 14 9.075 14.137Q9.3 14.275 9.425 14.5Q9.9 15.275 10.575 15.637Q11.25 16 12 16ZM5 19Q5 19 5 19Q5 19 5 19H8Q8.75 19 9.788 19Q10.825 19 12 19Q13.175 19 14.213 19Q15.25 19 16 19H19Q19 19 19 19Q19 19 19 19Z"/>
    </Icon>
  )
});

export default IconMaterialInboxRounded;
