import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatteryHoriz075TwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryHoriz075TwoTone'
      short_name='BatteryHoriz075'

      {...props}
    >
      <path d="M22.575 16.275q0 .625-.437 1.062-.438.438-1.063.438H4.9q-.625 0-1.062-.438Q3.4 16.9 3.4 16.275v-1.8H1.425V9.5H3.4V7.7q0-.6.438-1.05.437-.45 1.062-.45h16.175q.625 0 1.063.45.437.45.437 1.05Zm-12.4-1.525V9.225h-3.75v5.525Z"/>
    </Icon>
  )
});

export default IconMaterialBatteryHoriz075TwoTone;