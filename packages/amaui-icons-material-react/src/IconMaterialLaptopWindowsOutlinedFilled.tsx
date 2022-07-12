import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLaptopWindowsOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LaptopWindowsOutlinedFilled'
      short_name='LaptopWindows'

      {...props}
    >
      <path d="M0 20V18H4V17Q3.175 17 2.588 16.413Q2 15.825 2 15V5Q2 4.175 2.588 3.587Q3.175 3 4 3H20Q20.825 3 21.413 3.587Q22 4.175 22 5V15Q22 15.825 21.413 16.413Q20.825 17 20 17V18H24V20Z"/>
    </Icon>
  )
});

export default IconMaterialLaptopWindowsOutlinedFilled;
