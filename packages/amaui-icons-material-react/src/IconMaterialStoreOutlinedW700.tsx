import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStoreOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StoreOutlinedW700'
      short_name='Store'

      {...props}
    >
      <path d="M3.425 6V2.85H20.575V6ZM3.425 21.15V15.15H2.3V12L3.425 7H20.575L21.7 12V15.15H20.575V21.15H17.425V15.15H14.575V21.15ZM6.575 18H11.425V15.15H6.575ZM5.55 12H18.45ZM5.55 12H18.45L18.05 10.15H5.95Z"/>
    </Icon>
  )
});

export default IconMaterialStoreOutlinedW700;
