import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoorOpenOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorOpenOutlinedFilled'
      short_name='DoorOpen'

      {...props}
    >
      <path d="M3 21v-2h2V5q0-.825.588-1.413Q6.175 3 7 3h10q.825 0 1.413.587Q19 4.175 19 5v14h2v2Zm12-2h2V5h-4.5V3.9q1.1.2 1.8 1.025T15 6.85Zm-4-6q.425 0 .713-.288Q12 12.425 12 12t-.287-.713Q11.425 11 11 11t-.712.287Q10 11.575 10 12t.288.712Q10.575 13 11 13Z"/>
    </Icon>
  )
});

export default IconMaterialDoorOpenOutlinedFilled;
