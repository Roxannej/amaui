import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoorSensorSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorSensorSharp'
      short_name='DoorSensor'

      {...props}
    >
      <path d="M9 15V5v14-4Zm-2 1h2v3h6V5H9v9H7V3h10v18H7Zm5-6q.425 0 .713-.288Q13 9.425 13 9t-.287-.713Q12.425 8 12 8t-.712.287Q11 8.575 11 9t.288.712Q11.575 10 12 10Zm7-1V3h2v6ZM4 16v-2h9v2Z"/>
    </Icon>
  )
});

export default IconMaterialDoorSensorSharp;
