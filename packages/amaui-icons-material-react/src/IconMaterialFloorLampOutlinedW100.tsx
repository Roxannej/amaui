import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFloorLampOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FloorLampOutlinedW100'
      short_name='FloorLamp'

      {...props}
    >
      <path d="M11.65 19v-8H7.425q-.375 0-.613-.312-.237-.313-.112-.663L8.075 5.65q.15-.475.538-.763Q9 4.6 9.5 4.6h5q.5 0 .887.287.388.288.538.763l1.375 4.375q.125.35-.112.663-.238.312-.613.312H12.35v8Zm-4.3-8.7h9.3l-1.375-4.425q-.075-.25-.287-.412-.213-.163-.488-.163h-5q-.275 0-.488.163-.212.162-.287.412Zm1.3 10.4V20h6.7v.7ZM12 7.8Z"/>
    </Icon>
  )
});

export default IconMaterialFloorLampOutlinedW100;
