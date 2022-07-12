import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOpenInNewOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInNewOutlined'
      short_name='OpenInNew'

      {...props}
    >
      <path d="M21 12V19Q21 19.825 20.413 20.413Q19.825 21 19 21H5Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H12V5H5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19H19Q19 19 19 19Q19 19 19 19V12ZM9.7 15.7 8.3 14.3 17.6 5H14V3H21V10H19V6.4Z"/>
    </Icon>
  )
});

export default IconMaterialOpenInNewOutlined;
