import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDevicesOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DevicesOutlined'
      short_name='Devices'

      {...props}
    >
      <path d="M2 20V17H4V6Q4 5.175 4.588 4.588Q5.175 4 6 4H21V6H6Q6 6 6 6Q6 6 6 6V17H12V20ZM15 20Q14.575 20 14.288 19.712Q14 19.425 14 19V9Q14 8.575 14.288 8.287Q14.575 8 15 8H21Q21.425 8 21.712 8.287Q22 8.575 22 9V19Q22 19.425 21.712 19.712Q21.425 20 21 20ZM16 17H20V10H16Z"/>
    </Icon>
  )
});

export default IconMaterialDevicesOutlined;