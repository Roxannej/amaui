import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoorOpenTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorOpenTwoTone'
      short_name='DoorOpen'

      {...props}
    >
      <path d="M11 13q.425 0 .713-.288Q12 12.425 12 12t-.287-.713Q11.425 11 11 11t-.712.287Q10 11.575 10 12t.288.712Q10.575 13 11 13Zm-4 8v-2l6-1V6.875q0-.375-.225-.675-.225-.3-.575-.35L7 5V3l5.5.9q1.1.2 1.8 1.025T15 6.85v12.8Zm-4 0v-2h2V5q0-.85.588-1.425Q6.175 3 7 3h10q.85 0 1.425.575Q19 4.15 19 5v14h2v2Zm4-2h10V5H7Z"/>
    </Icon>
  )
});

export default IconMaterialDoorOpenTwoTone;
