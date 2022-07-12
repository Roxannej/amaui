import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHeadphonesBatteryOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeadphonesBatteryOutlined'
      short_name='HeadphonesBattery'

      {...props}
    >
      <path d="M6 18H4Q3.175 18 2.588 17.413Q2 16.825 2 16V12Q2 9.5 3.75 7.75Q5.5 6 8 6Q10.5 6 12.25 7.75Q14 9.5 14 12V16Q14 16.825 13.413 17.413Q12.825 18 12 18H10V13H12.5V12Q12.5 10.125 11.188 8.812Q9.875 7.5 8 7.5Q6.125 7.5 4.812 8.812Q3.5 10.125 3.5 12V13H6ZM18 7V6H20V7H21Q21.425 7 21.712 7.287Q22 7.575 22 8V17Q22 17.425 21.712 17.712Q21.425 18 21 18H17Q16.575 18 16.288 17.712Q16 17.425 16 17V8Q16 7.575 16.288 7.287Q16.575 7 17 7ZM18 16H20H18ZM18 16H20V9H18Z"/>
    </Icon>
  )
});

export default IconMaterialHeadphonesBatteryOutlined;
