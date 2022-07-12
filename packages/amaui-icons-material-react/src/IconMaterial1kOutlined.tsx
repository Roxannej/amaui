import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial1kOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='1kOutlined'
      short_name='1k'

      {...props}
    >
      <path d="M12 15H13.5V12.75L15.25 15H17.075L14.75 12L17.075 9H15.25L13.5 11.25V9H12ZM8.5 15H10V9H7V10.5H8.5ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM5 19H19Q19 19 19 19Q19 19 19 19V5Q19 5 19 5Q19 5 19 5H5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19ZM5 5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19Q5 19 5 19Q5 19 5 19V5Q5 5 5 5Q5 5 5 5Z"/>
    </Icon>
  )
});

export default IconMaterial1kOutlined;