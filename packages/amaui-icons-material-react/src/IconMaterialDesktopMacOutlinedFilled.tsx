import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDesktopMacOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesktopMacOutlinedFilled'
      short_name='DesktopMac'

      {...props}
    >
      <path d="M8 22V21L10 19H4Q3.175 19 2.588 18.413Q2 17.825 2 17V5Q2 4.175 2.588 3.587Q3.175 3 4 3H20Q20.825 3 21.413 3.587Q22 4.175 22 5V17Q22 17.825 21.413 18.413Q20.825 19 20 19H14L16 21V22Z"/>
    </Icon>
  )
});

export default IconMaterialDesktopMacOutlinedFilled;
