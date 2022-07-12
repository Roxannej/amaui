import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOutboxOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutboxOutlined'
      short_name='Outbox'

      {...props}
    >
      <path d="M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM5 16V19Q5 19 5 19Q5 19 5 19H19Q19 19 19 19Q19 19 19 19V16H16Q15.275 16.9 14.262 17.45Q13.25 18 12 18Q10.75 18 9.738 17.45Q8.725 16.9 8 16ZM5 14H9.2Q9.5 14.875 10.262 15.438Q11.025 16 12 16Q12.975 16 13.738 15.438Q14.5 14.875 14.8 14H19V5Q19 5 19 5Q19 5 19 5H5Q5 5 5 5Q5 5 5 5ZM11 14V9.85L9.4 11.45L8 10L12 6L16 10L14.6 11.45L13 9.85V14ZM5 19H8Q8.725 19 9.738 19Q10.75 19 12 19Q13.25 19 14.262 19Q15.275 19 16 19H19Q19 19 19 19Q19 19 19 19H5Q5 19 5 19Q5 19 5 19Z"/>
    </Icon>
  )
});

export default IconMaterialOutboxOutlined;
