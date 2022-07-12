import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHardwareOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HardwareOutlined'
      short_name='Hardware'

      {...props}
    >
      <path d="M10 21Q9.575 21 9.288 20.712Q9 20.425 9 20V8H4Q4 5.925 5.463 4.463Q6.925 3 9 3H15V6L18 3H20V11H18L15 8V20Q15 20.425 14.713 20.712Q14.425 21 14 21ZM11 19H13V13H12H11ZM11 11H13V5H9Q8.35 5 7.775 5.262Q7.2 5.525 6.775 6H11ZM12 12Q12 12 12 12Q12 12 12 12Z"/>
    </Icon>
  )
});

export default IconMaterialHardwareOutlined;
