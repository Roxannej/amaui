import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial4kPlusOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='4kPlusOutlined'
      short_name='4kPlus'

      {...props}
    >
      <path d="M16.5 14H17.5V12.5H19V11.5H17.5V10H16.5V11.5H15V12.5H16.5ZM11.5 15H13V12.75L14.75 15H16.575L14.25 12L16.575 9H14.75L13 11.25V9H11.5ZM8.5 15H10V13.5H11V12H10V9H8.5V12H7V9H5.5V13.5H8.5ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM5 19H19Q19 19 19 19Q19 19 19 19V5Q19 5 19 5Q19 5 19 5H5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19ZM5 5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19Q5 19 5 19Q5 19 5 19V5Q5 5 5 5Q5 5 5 5Z"/>
    </Icon>
  )
});

export default IconMaterial4kPlusOutlined;