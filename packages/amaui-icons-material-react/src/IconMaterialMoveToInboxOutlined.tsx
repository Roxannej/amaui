import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMoveToInboxOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveToInboxOutlined'
      short_name='MoveToInbox'

      {...props}
    >
      <path d="M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM5 19H19Q19 19 19 19Q19 19 19 19V16H16Q15.25 16.95 14.213 17.475Q13.175 18 12 18Q10.825 18 9.788 17.475Q8.75 16.95 8 16H5V19Q5 19 5 19Q5 19 5 19ZM12 16Q12.95 16 13.725 15.45Q14.5 14.9 14.8 14H19V5Q19 5 19 5Q19 5 19 5H5Q5 5 5 5Q5 5 5 5V14H9.2Q9.5 14.9 10.275 15.45Q11.05 16 12 16ZM12 14 8 10 9.4 8.55 11 10.15V6H13V10.15L14.6 8.55L16 10ZM5 19Q5 19 5 19Q5 19 5 19H8Q8.75 19 9.788 19Q10.825 19 12 19Q13.175 19 14.213 19Q15.25 19 16 19H19Q19 19 19 19Q19 19 19 19Z"/>
    </Icon>
  )
});

export default IconMaterialMoveToInboxOutlined;
