import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoorOpenRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorOpenRoundedW700Filled'
      short_name='DoorOpen'

      {...props}
    >
      <path d="M3.75 21.825q-.65 0-1.112-.463-.463-.462-.463-1.112 0-.65.463-1.112.462-.463 1.112-.463h.425v-13.1q0-1.325.913-2.238.912-.912 2.237-.912h9.35q1.325 0 2.238.912.912.913.912 2.238v13.1h.425q.65 0 1.113.463.462.462.462 1.112 0 .65-.462 1.112-.463.463-1.113.463Zm12.925-3.15v-13.1H11.75V3.15q1.725.275 2.825 1.6 1.1 1.325 1.1 3.05v9.95q0 1.175-.75 2.038-.75.862-1.9 1.062v-2.175ZM10.55 13.45q.6 0 1.025-.438Q12 12.575 12 12q0-.6-.425-1.025-.425-.425-1.025-.425-.575 0-1.012.425Q9.1 11.4 9.1 12q0 .575.438 1.012.437.438 1.012.438Z"/>
    </Icon>
  )
});

export default IconMaterialDoorOpenRoundedW700Filled;