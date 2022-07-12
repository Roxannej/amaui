import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTabletAndroidOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabletAndroidOutlined'
      short_name='TabletAndroid'

      {...props}
    >
      <path d="M10 20H14V19H10ZM5 23Q4.175 23 3.587 22.413Q3 21.825 3 21V3Q3 2.175 3.587 1.587Q4.175 1 5 1H19Q19.825 1 20.413 1.587Q21 2.175 21 3V21Q21 21.825 20.413 22.413Q19.825 23 19 23ZM5 16H19V6H5ZM5 18V21Q5 21 5 21Q5 21 5 21H19Q19 21 19 21Q19 21 19 21V18ZM5 4H19V3Q19 3 19 3Q19 3 19 3H5Q5 3 5 3Q5 3 5 3ZM5 3Q5 3 5 3Q5 3 5 3V4V3Q5 3 5 3Q5 3 5 3ZM5 21Q5 21 5 21Q5 21 5 21V18V21Q5 21 5 21Q5 21 5 21Z"/>
    </Icon>
  )
});

export default IconMaterialTabletAndroidOutlined;
