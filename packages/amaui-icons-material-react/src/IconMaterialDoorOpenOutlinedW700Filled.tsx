import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoorOpenOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorOpenOutlinedW700Filled'
      short_name='DoorOpen'

      {...props}
    >
      <path d="M2.175 21.825v-3.15h2v-13.1q0-1.325.913-2.238.912-.912 2.237-.912h9.35q1.325 0 2.238.912.912.913.912 2.238v13.1h2v3.15Zm13.5-3.15h1v-13.1H11.75V3.15q1.725.275 2.825 1.6 1.1 1.325 1.1 3.05ZM10.55 13.45q.6 0 1.025-.438Q12 12.575 12 12q0-.6-.425-1.025-.425-.425-1.025-.425-.575 0-1.012.425Q9.1 11.4 9.1 12q0 .575.438 1.012.437.438 1.012.438Z"/>
    </Icon>
  )
});

export default IconMaterialDoorOpenOutlinedW700Filled;