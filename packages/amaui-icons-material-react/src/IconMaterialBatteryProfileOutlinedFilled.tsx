import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatteryProfileOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryProfileOutlinedFilled'
      short_name='BatteryProfile'

      {...props}
    >
      <path d="M5 22q-.425 0-.713-.288Q4 21.425 4 21V5q0-.425.287-.713Q4.575 4 5 4h2V2h4v2h2q.425 0 .713.287Q14 4.575 14 5v16q0 .425-.287.712Q13.425 22 13 22Zm1-2h6V6H6Zm13-8-1.25-2.75L15 8l2.75-1.25L19 4l1.25 2.75L23 8l-2.75 1.25Z"/>
    </Icon>
  )
});

export default IconMaterialBatteryProfileOutlinedFilled;