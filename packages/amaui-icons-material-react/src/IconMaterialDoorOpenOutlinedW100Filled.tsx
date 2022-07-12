import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoorOpenOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorOpenOutlinedW100Filled'
      short_name='DoorOpen'

      {...props}
    >
      <path d="M4.9 19.7V19h1.4V5.15q0-.625.438-1.063.437-.437 1.062-.437h8.4q.625 0 1.062.437.438.438.438 1.063V19h1.4v.7ZM15 19h2V5.15q0-.35-.225-.575-.225-.225-.575-.225h-3.25v-.3q.875.075 1.463.725Q15 5.425 15 6.3Zm-3.975-6.3q.275 0 .475-.213.2-.212.2-.512 0-.275-.2-.475-.2-.2-.5-.2-.275 0-.487.2-.213.2-.213.5 0 .275.213.487.212.213.512.213Z"/>
    </Icon>
  )
});

export default IconMaterialDoorOpenOutlinedW100Filled;
