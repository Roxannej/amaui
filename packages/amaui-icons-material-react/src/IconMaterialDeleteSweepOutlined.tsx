import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDeleteSweepOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeleteSweepOutlined'
      short_name='DeleteSweep'

      {...props}
    >
      <path d="M15 18V16H19V18ZM15 10V8H22V10ZM15 14V12H21V14ZM5 20Q4.175 20 3.587 19.413Q3 18.825 3 18V8H13V18Q13 18.825 12.413 19.413Q11.825 20 11 20ZM2 7V5H5L6 4H10L11 5H14V7ZM11 10H5V18Q5 18 5 18Q5 18 5 18H11Q11 18 11 18Q11 18 11 18ZM11 18Q11 18 11 18Q11 18 11 18H5Q5 18 5 18Q5 18 5 18Z"/>
    </Icon>
  )
});

export default IconMaterialDeleteSweepOutlined;
