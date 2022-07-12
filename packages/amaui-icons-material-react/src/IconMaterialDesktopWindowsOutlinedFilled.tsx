import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDesktopWindowsOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesktopWindowsOutlinedFilled'
      short_name='DesktopWindows'

      {...props}
    >
      <path d="M8 22V20H10V18H4Q3.175 18 2.588 17.413Q2 16.825 2 16V5Q2 4.175 2.588 3.587Q3.175 3 4 3H20Q20.825 3 21.413 3.587Q22 4.175 22 5V16Q22 16.825 21.413 17.413Q20.825 18 20 18H14V20H16V22Z"/>
    </Icon>
  )
});

export default IconMaterialDesktopWindowsOutlinedFilled;
