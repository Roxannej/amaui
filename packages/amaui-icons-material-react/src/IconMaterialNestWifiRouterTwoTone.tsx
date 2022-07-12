import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNestWifiRouterTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestWifiRouterTwoTone'
      short_name='NestWifiRouter'

      {...props}
    >
      <path d="M8.8 21.625q-2.125 0-3.925-1.337-1.8-1.338-2.35-3.688h18.95q-.5 2.35-2.312 3.688-1.813 1.337-3.938 1.337ZM2.375 13.95V8.775q0-2.65 1.888-4.525Q6.15 2.375 8.8 2.375h6.425q2.65 0 4.525 1.875 1.875 1.875 1.875 4.525v5.175Z"/>
    </Icon>
  )
});

export default IconMaterialNestWifiRouterTwoTone;