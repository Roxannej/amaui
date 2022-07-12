import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFloorLampSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FloorLampSharpW700'
      short_name='FloorLamp'

      {...props}
    >
      <path d="M10.425 18.975V11h-6.45l3.1-10h9.85l3.1 10h-6.45v7.975ZM8.225 7.85h7.55l-1.15-3.7h-5.25Zm-.8 15.275v-3.15h9.15v3.15ZM12 6Z"/>
    </Icon>
  )
});

export default IconMaterialFloorLampSharpW700;
