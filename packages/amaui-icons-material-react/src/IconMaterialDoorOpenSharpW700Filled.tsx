import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoorOpenSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorOpenSharpW700Filled'
      short_name='DoorOpen'

      {...props}
    >
      <path d="M2.175 21.825v-3.15h2V2.425h15.65v16.25h2v3.15Zm13.5-3.15h1v-13.1h-1Zm-5.1-5.225q.575 0 1-.438.425-.437.425-1.037 0-.575-.425-1-.425-.425-1-.425-.6 0-1.037.425-.438.425-.438 1 0 .6.438 1.037.437.438 1.037.438Z"/>
    </Icon>
  )
});

export default IconMaterialDoorOpenSharpW700Filled;
