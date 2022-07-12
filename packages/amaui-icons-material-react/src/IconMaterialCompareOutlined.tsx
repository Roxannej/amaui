import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCompareOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CompareOutlined'
      short_name='Compare'

      {...props}
    >
      <path d="M10 23V21H5Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H10V1H12V23ZM5 18H10V12ZM14 21V12L19 18V5Q19 5 19 5Q19 5 19 5H14V3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21Z"/>
    </Icon>
  )
});

export default IconMaterialCompareOutlined;