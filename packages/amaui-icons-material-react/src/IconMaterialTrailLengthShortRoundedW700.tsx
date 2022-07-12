import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTrailLengthShortRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrailLengthShortRoundedW700'
      short_name='TrailLengthShort'

      {...props}
    >
      <path d="M15 17.575q-1.9 0-3.375-1.137Q10.15 15.3 9.65 13.575H3.425v-3.15H9.65q.05-.225.138-.438.087-.212.212-.412H5.425v-3.15H15q2.325 0 3.95 1.625T20.575 12q0 2.3-1.625 3.938-1.625 1.637-3.95 1.637Zm0-3.15q1.025 0 1.725-.713.7-.712.7-1.712 0-1.025-.7-1.725-.7-.7-1.725-.7-1 0-1.712.7-.713.7-.713 1.725 0 1 .713 1.712.712.713 1.712.713Zm-8.575 3.15v-3.15h3.35v3.15ZM15 12Z"/>
    </Icon>
  )
});

export default IconMaterialTrailLengthShortRoundedW700;
