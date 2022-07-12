import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDesktopMacOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesktopMacOutlined'
      short_name='DesktopMac'

      {...props}
    >
      <path d="M8 22V21L10 19H4Q3.175 19 2.588 18.413Q2 17.825 2 17V5Q2 4.175 2.588 3.587Q3.175 3 4 3H20Q20.825 3 21.413 3.587Q22 4.175 22 5V17Q22 17.825 21.413 18.413Q20.825 19 20 19H14L16 21V22ZM4 14H20V5Q20 5 20 5Q20 5 20 5H4Q4 5 4 5Q4 5 4 5ZM4 14V5Q4 5 4 5Q4 5 4 5Q4 5 4 5Q4 5 4 5V14Z"/>
    </Icon>
  )
});

export default IconMaterialDesktopMacOutlined;