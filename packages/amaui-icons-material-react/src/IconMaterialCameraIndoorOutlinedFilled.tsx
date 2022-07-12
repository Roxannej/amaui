import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCameraIndoorOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraIndoorOutlinedFilled'
      short_name='CameraIndoor'

      {...props}
    >
      <path d="M9 17H13Q13.425 17 13.713 16.712Q14 16.425 14 16V15L16 16.05V11.95L14 13V12Q14 11.575 13.713 11.287Q13.425 11 13 11H9Q8.575 11 8.288 11.287Q8 11.575 8 12V16Q8 16.425 8.288 16.712Q8.575 17 9 17ZM4 21V9L12 3L20 9V21Z"/>
    </Icon>
  )
});

export default IconMaterialCameraIndoorOutlinedFilled;