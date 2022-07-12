import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSubscriptOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubscriptOutlined'
      short_name='Subscript'

      {...props}
    >
      <path d="M19 20V18Q19 17.575 19.288 17.288Q19.575 17 20 17H22V16H19V15H22Q22.425 15 22.712 15.287Q23 15.575 23 16V17Q23 17.425 22.712 17.712Q22.425 18 22 18H20V19H23V20ZM5.875 18 10.5 10.725 6.2 4H8.85L11.95 9H12.05L15.125 4H17.8L13.475 10.725L18.125 18H15.45L12.05 12.575H11.95L8.55 18Z"/>
    </Icon>
  )
});

export default IconMaterialSubscriptOutlined;
