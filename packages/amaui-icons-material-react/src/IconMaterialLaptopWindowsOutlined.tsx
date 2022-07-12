import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLaptopWindowsOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LaptopWindowsOutlined'
      short_name='LaptopWindows'

      {...props}
    >
      <path d="M0 20V18H4V17Q3.175 17 2.588 16.413Q2 15.825 2 15V5Q2 4.175 2.588 3.587Q3.175 3 4 3H20Q20.825 3 21.413 3.587Q22 4.175 22 5V15Q22 15.825 21.413 16.413Q20.825 17 20 17V18H24V20ZM20 15Q20 15 20 15Q20 15 20 15V5Q20 5 20 5Q20 5 20 5H4Q4 5 4 5Q4 5 4 5V15Q4 15 4 15Q4 15 4 15ZM4 15Q4 15 4 15Q4 15 4 15V5Q4 5 4 5Q4 5 4 5Q4 5 4 5Q4 5 4 5V15Q4 15 4 15Q4 15 4 15Z"/>
    </Icon>
  )
});

export default IconMaterialLaptopWindowsOutlined;
