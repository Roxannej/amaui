import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatteryVert005OutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryVert005OutlinedFilled'
      short_name='BatteryVert005'

      {...props}
    >
      <path d="M8 22q-.425 0-.713-.288Q7 21.425 7 21V5q0-.425.287-.713Q7.575 4 8 4h2V2h4v2h2q.425 0 .712.287Q17 4.575 17 5v16q0 .425-.288.712Q16.425 22 16 22Zm1-3h6V6H9Z"/>
    </Icon>
  )
});

export default IconMaterialBatteryVert005OutlinedFilled;