import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDetectorStatusRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DetectorStatusRoundedW700'
      short_name='DetectorStatus'

      {...props}
    >
      <path d="M10.95 21.825 6.575 17.45l2.25-2.2 2.125 2.1 4.225-4.25 2.25 2.25ZM4.35 4.75h15.3v-1H4.35v1Zm3.9 4.15h7.5l.275-1h-8.05l.275 1Zm0 3.15q-1.125 0-1.975-.675-.85-.675-1.1-1.75l-.4-1.725H4.35q-1.3 0-2.225-.925T1.2 4.75V.6h21.6v4.15q0 1.3-.925 2.225T19.65 7.9h-.425L18.8 9.65q-.275 1.05-1.125 1.725t-1.95.675Zm-3.9-7.3v-1 1Z"/>
    </Icon>
  )
});

export default IconMaterialDetectorStatusRoundedW700;
