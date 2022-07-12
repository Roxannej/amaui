import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial3kOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='3kOutlined'
      short_name='3k'

      {...props}
    >
      <path d="M13 15H14.5V12.75L16.25 15H18.075L15.75 12L18.075 9H16.25L14.5 11.25V9H13ZM6.5 15H10Q10.425 15 10.713 14.712Q11 14.425 11 14V10Q11 9.575 10.713 9.287Q10.425 9 10 9H6.5V10.5H9.5V11.5H7.5V12.5H9.5V13.5H6.5ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM5 19H19Q19 19 19 19Q19 19 19 19V5Q19 5 19 5Q19 5 19 5H5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19ZM5 5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19Q5 19 5 19Q5 19 5 19V5Q5 5 5 5Q5 5 5 5Z"/>
    </Icon>
  )
});

export default IconMaterial3kOutlined;