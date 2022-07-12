import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatteryLowTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryLowTwoTone'
      short_name='BatteryLow'

      {...props}
    >
      <path d="M22.575 16.275q0 .625-.437 1.062-.438.438-1.063.438H4.9q-.625 0-1.062-.438Q3.4 16.9 3.4 16.275v-1.8H1.425V9.5H3.4V7.7q0-.6.438-1.05.437-.45 1.062-.45h16.175q.625 0 1.063.45.437.45.437 1.05ZM16.55 14.75V9.225H6.425v5.525Z"/>
    </Icon>
  )
});

export default IconMaterialBatteryLowTwoTone;