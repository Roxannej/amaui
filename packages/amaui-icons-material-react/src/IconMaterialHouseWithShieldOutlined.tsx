import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHouseWithShieldOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HouseWithShieldOutlined'
      short_name='HouseWithShield'

      {...props}
    >
      <path d="M12 18q1.725-.425 2.863-1.988Q16 14.45 16 12.55V10l-4-2-4 2v2.55q0 1.9 1.137 3.462Q10.275 17.575 12 18Zm-8 3V9l8-6 8 6v12Zm2-2h12v-9l-6-4.5L6 10Zm6-6.75Z"/>
    </Icon>
  )
});

export default IconMaterialHouseWithShieldOutlined;
