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
      <path d="M3.75 21.75q-.6 0-1.05-.45-.45-.45-.45-1.05 0-.625.45-1.075.45-.45 1.05-.45h.5V5.5q0-1.25.875-2.138.875-.887 2.15-.887h9.475q1.25 0 2.138.887.887.888.887 2.138v13.225h.475q.625 0 1.075.45.45.45.45 1.075 0 .6-.45 1.05-.45.45-1.075.45Zm13-3.025V5.5h-4.975V3.2q1.725.25 2.813 1.575Q15.675 6.1 15.675 7.8v10.025q0 1.125-.712 1.95-.713.825-1.838 1.025v-2.075Zm-6.2-5.35q.575 0 .988-.425.412-.425.412-.95 0-.575-.412-.988-.413-.412-.988-.412-.525 0-.95.412-.425.413-.425.988 0 .525.425.95.425.425.95.425Z"/>
    </Icon>
  )
});

export default IconMaterialDoorOpenTwoTone;
