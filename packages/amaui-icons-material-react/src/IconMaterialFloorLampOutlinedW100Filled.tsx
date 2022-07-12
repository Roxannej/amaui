import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFloorLampOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FloorLampOutlinedW100Filled'
      short_name='FloorLamp'

      {...props}
    >
      <path d="M11.65 19v-8H7.425q-.375 0-.613-.312-.237-.313-.112-.663L8.075 5.65q.15-.5.55-.775T9.5 4.6h5q.5 0 .887.275.388.275.538.775l1.375 4.375q.125.35-.112.663-.238.312-.613.312H12.35v8Zm-3 1.7V20h6.7v.7Z"/>
    </Icon>
  )
});

export default IconMaterialFloorLampOutlinedW100Filled;