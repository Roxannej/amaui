import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExposureOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExposureOutlined'
      short_name='Exposure'

      {...props}
    >
      <path d="M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM6 8.5H11V7H6ZM5 19H19Q19 19 19 19Q19 19 19 19V5Q19 5 19 5Q19 5 19 5L5 19Q5 19 5 19Q5 19 5 19ZM14.5 18V16H12.5V14.5H14.5V12.5H16V14.5H18V16H16V18Z"/>
    </Icon>
  )
});

export default IconMaterialExposureOutlined;