import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrokenImageOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrokenImageOutlined'
      short_name='BrokenImage'

      {...props}
    >
      <path d="M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM6 12.575 10 8.575 14 12.575 18 8.575 19 9.575V5Q19 5 19 5Q19 5 19 5H5Q5 5 5 5Q5 5 5 5V11.575ZM5 19H19Q19 19 19 19Q19 19 19 19V12.4L18 11.4L14 15.4L10 11.4L6 15.4L5 14.4V19Q5 19 5 19Q5 19 5 19ZM5 19Q5 19 5 19Q5 19 5 19V12.4V14.4V11.575V9.575V5Q5 5 5 5Q5 5 5 5Q5 5 5 5Q5 5 5 5V11.575V14.4V19Q5 19 5 19Q5 19 5 19Z"/>
    </Icon>
  )
});

export default IconMaterialBrokenImageOutlined;