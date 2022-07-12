import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoorOpenOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorOpenOutlinedW700'
      short_name='DoorOpen'

      {...props}
    >
      <path d="M10.55 13.45q.6 0 1.025-.438Q12 12.575 12 12q0-.6-.425-1.025-.425-.425-1.025-.425-.575 0-1.012.425Q9.1 11.4 9.1 12q0 .575.438 1.012.437.438 1.012.438ZM7.325 21.8v-3.125l5.2-.875V7.825q0-.575-.4-1.013-.4-.437-.975-.537L7.325 5.55V2.425l4.425.725q1.725.275 2.825 1.6 1.1 1.325 1.1 3.05v12.625Zm-5.15.025v-3.15h2v-13.1q0-1.325.925-2.238.925-.912 2.225-.912h9.35q1.325 0 2.238.912.912.913.912 2.238v13.1h2v3.15Zm5.15-3.15h9.35v-13.1l-9.35-.025Z"/>
    </Icon>
  )
});

export default IconMaterialDoorOpenOutlinedW700;
