import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCameraIndoorOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraIndoorOutlined'
      short_name='CameraIndoor'

      {...props}
    >
      <path d="M9 17H13Q13.425 17 13.713 16.712Q14 16.425 14 16V15L16 16.05V11.95L14 13V12Q14 11.575 13.713 11.287Q13.425 11 13 11H9Q8.575 11 8.288 11.287Q8 11.575 8 12V16Q8 16.425 8.288 16.712Q8.575 17 9 17ZM4 21V9L12 3L20 9V21ZM6 19H18V10L12 5.5L6 10ZM12 12.25Z"/>
    </Icon>
  )
});

export default IconMaterialCameraIndoorOutlined;
