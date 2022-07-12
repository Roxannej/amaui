import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatteryProfileTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryProfileTwoTone'
      short_name='BatteryProfile'

      {...props}
    >
      <path d="M3.225 22.575q-.625 0-1.062-.438-.438-.437-.438-1.062V4.9q0-.625.438-1.063Q2.6 3.4 3.225 3.4h1.8V1.425H10V3.4h1.8q.6 0 1.05.437.45.438.45 1.063v16.175q0 .625-.45 1.062-.45.438-1.05.438ZM4.75 19.55h5.525V6.425H4.75Zm14.325-6.85-1.45-3.15L14.5 8.125l3.125-1.4 1.45-3.125L20.5 6.725l3.125 1.4L20.5 9.55Z"/>
    </Icon>
  )
});

export default IconMaterialBatteryProfileTwoTone;
