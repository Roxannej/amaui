import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideoCameraBackOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoCameraBackOutlined'
      short_name='VideoCameraBack'

      {...props}
    >
      <path d="M4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H16Q16.825 4 17.413 4.588Q18 5.175 18 6V10.5L22 6.5V17.5L18 13.5V18Q18 18.825 17.413 19.413Q16.825 20 16 20ZM4 18H16Q16 18 16 18Q16 18 16 18V6Q16 6 16 6Q16 6 16 6H4Q4 6 4 6Q4 6 4 6V18Q4 18 4 18Q4 18 4 18ZM5 16H15L11.55 11.5L9.25 14.5L7.7 12.5ZM4 18Q4 18 4 18Q4 18 4 18V6Q4 6 4 6Q4 6 4 6Q4 6 4 6Q4 6 4 6V18Q4 18 4 18Q4 18 4 18Z"/>
    </Icon>
  )
});

export default IconMaterialVideoCameraBackOutlined;
