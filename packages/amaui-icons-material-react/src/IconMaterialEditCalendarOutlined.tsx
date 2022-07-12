import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditCalendarOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditCalendarOutlined'
      short_name='EditCalendar'

      {...props}
    >
      <path d="M5 22Q4.175 22 3.587 21.413Q3 20.825 3 20V6Q3 5.175 3.587 4.588Q4.175 4 5 4H6V2H8V4H16V2H18V4H19Q19.825 4 20.413 4.588Q21 5.175 21 6V12H19V10H5V20Q5 20 5 20Q5 20 5 20H12V22ZM22.125 17 20 14.875 20.725 14.15Q21 13.875 21.425 13.875Q21.85 13.875 22.125 14.15L22.85 14.875Q23.125 15.15 23.125 15.575Q23.125 16 22.85 16.275ZM14 23V20.875L19.3 15.575L21.425 17.7L16.125 23ZM5 8H19V6Q19 6 19 6Q19 6 19 6H5Q5 6 5 6Q5 6 5 6ZM5 8V6Q5 6 5 6Q5 6 5 6Q5 6 5 6Q5 6 5 6V8Z"/>
    </Icon>
  )
});

export default IconMaterialEditCalendarOutlined;
