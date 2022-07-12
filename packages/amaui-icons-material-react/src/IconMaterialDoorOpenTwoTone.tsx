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
      <path d="M2.25 21.75v-3.025h2V5.5q0-1.25.875-2.138.875-.887 2.15-.887h9.475q1.25 0 2.138.887.887.888.887 2.138v13.225h2v3.025Zm13.425-3.025h1.075V5.5h-4.975V3.2q1.725.25 2.813 1.575Q15.675 6.1 15.675 7.8Zm-5.125-5.35q.575 0 .988-.425.412-.425.412-.95 0-.575-.412-.988-.413-.412-.988-.412-.525 0-.95.412-.425.413-.425.988 0 .525.425.95.425.425.95.425Z"/>
    </Icon>
  )
});

export default IconMaterialDoorOpenTwoTone;