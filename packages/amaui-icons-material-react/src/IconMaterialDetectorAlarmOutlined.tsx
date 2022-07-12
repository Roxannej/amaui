import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDetectorAlarmOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DetectorAlarmOutlined'
      short_name='DetectorAlarm'

      {...props}
    >
      <path d="M11 21v-5h2v5Zm8.075-2.525-3.55-3.525 1.425-1.425 3.525 3.55Zm-14.15 0-1.4-1.4 3.525-3.55 1.425 1.425ZM5 6h14V5H5v1Zm3.4 3h7.2l.3-1H8.1l.3 1Zm0 2q-.65 0-1.175-.387Q6.7 10.225 6.5 9.6L6 8H5q-.825 0-1.413-.588Q3 6.825 3 6V3h18v3q0 .825-.587 1.412Q19.825 8 19 8h-1l-.65 1.7q-.225.575-.725.937-.5.363-1.125.363ZM5 6V5v1Z"/>
    </Icon>
  )
});

export default IconMaterialDetectorAlarmOutlined;
