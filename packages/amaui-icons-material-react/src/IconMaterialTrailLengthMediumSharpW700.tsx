import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTrailLengthMediumSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrailLengthMediumSharpW700'
      short_name='TrailLengthMedium'

      {...props}
    >
      <path d="M6.8 17.575v-3.15H11q-.125-.2-.212-.413-.088-.212-.138-.437H4.425v-3.15h6.225q.05-.225.138-.438.087-.212.212-.412H6.425v-3.15H16q2.325 0 3.95 1.625T21.575 12q0 2.3-1.625 3.938-1.625 1.637-3.95 1.637Zm9.2-3.15q1.025 0 1.725-.713.7-.712.7-1.712 0-1.025-.7-1.725-.7-.7-1.725-.7-1 0-1.712.7-.713.7-.713 1.725 0 1 .713 1.712.712.713 1.712.713Zm-13.575 3.15v-3.15H5.8v3.15ZM16 12Z"/>
    </Icon>
  )
});

export default IconMaterialTrailLengthMediumSharpW700;
