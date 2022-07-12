import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoorOpenSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorOpenSharpW700'
      short_name='DoorOpen'

      {...props}
    >
      <path d="M10.55 13.45q.6 0 1.025-.438Q12 12.575 12 12q0-.6-.425-1.025-.425-.425-1.025-.425-.575 0-1.012.425Q9.1 11.4 9.1 12q0 .575.438 1.012.437.438 1.012.438ZM7.325 21.8v-3.125l5.2-.875V6.525l-5.2-.975V2.425l8.35 1.375v16.625Zm0-3.125h9.35v-13.1l-9.35-.025Zm-5.15 3.15v-3.15h2V2.425h15.65v16.25h2v3.15Z"/>
    </Icon>
  )
});

export default IconMaterialDoorOpenSharpW700;