import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNestWifiPointTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestWifiPointTwoTone'
      short_name='NestWifiPoint'

      {...props}
    >
      <path d="M8.8 21.625q-2.65 0-4.537-1.887Q2.375 17.85 2.375 15.2V8.775q0-2.65 1.888-4.525Q6.15 2.375 8.8 2.375h6.425q2.65 0 4.525 1.875 1.875 1.875 1.875 4.525V15.2q0 2.65-1.875 4.538-1.875 1.887-4.525 1.887Zm.1-3.025q0-.4.275-.675t.675-.275q.4 0 .675.275t.275.675h2.425q0-.4.275-.675t.65-.275q.4 0 .675.275t.275.675q1.1 0 1.875-.5.775-.5 1.275-1.375h-1.025q0 .375-.275.65t-.675.275q-.375 0-.65-.275t-.275-.65h-2.4q0 .375-.275.65T12 17.65q-.375 0-.65-.275t-.275-.65h-2.4q0 .375-.275.65t-.675.275q-.375 0-.65-.275t-.275-.65H5.775q.425.85 1.225 1.362.8.513 1.9.513Z"/>
    </Icon>
  )
});

export default IconMaterialNestWifiPointTwoTone;
