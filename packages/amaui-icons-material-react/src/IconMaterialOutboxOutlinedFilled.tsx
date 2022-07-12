import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOutboxOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutboxOutlinedFilled'
      short_name='Outbox'

      {...props}
    >
      <path d="M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM5 14H9.2Q9.5 14.875 10.262 15.438Q11.025 16 12 16Q12.975 16 13.738 15.438Q14.5 14.875 14.8 14H19V5Q19 5 19 5Q19 5 19 5H5Q5 5 5 5Q5 5 5 5ZM11 14V9.85L9.4 11.45L8 10L12 6L16 10L14.6 11.45L13 9.85V14Z"/>
    </Icon>
  )
});

export default IconMaterialOutboxOutlinedFilled;
