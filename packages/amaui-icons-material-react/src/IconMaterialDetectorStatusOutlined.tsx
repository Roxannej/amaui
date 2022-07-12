import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDetectorStatusOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DetectorStatusOutlined'
      short_name='DetectorStatus'

      {...props}
    >
      <path d="M10.95 21 7.4 17.45l1.425-1.4 2.125 2.125 4.225-4.25L16.6 15.35ZM5 6h14V5H5v1Zm3.4 3h7.2l.3-1H8.1l.3 1Zm0 2q-.65 0-1.175-.387Q6.7 10.225 6.5 9.6L6 8H5q-.825 0-1.413-.588Q3 6.825 3 6V3h18v3q0 .825-.587 1.412Q19.825 8 19 8h-1l-.65 1.7q-.225.575-.725.937-.5.363-1.125.363ZM5 6V5v1Z"/>
    </Icon>
  )
});

export default IconMaterialDetectorStatusOutlined;