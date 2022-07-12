import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFeedOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FeedOutlined'
      short_name='Feed'

      {...props}
    >
      <path d="M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H16L21 8V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM5 19H19V9H15V5H5ZM7 17H17V15H7ZM7 9H12V7H7ZM7 13H17V11H7ZM5 5V9V5V9V19Z"/>
    </Icon>
  )
});

export default IconMaterialFeedOutlined;
