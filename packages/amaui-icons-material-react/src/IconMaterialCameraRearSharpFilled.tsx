import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCameraRearSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraRearSharpFilled'
      short_name='CameraRear'

      {...props}
    >
      <path d="M9.85 22.5 8.45 21.1 9.55 20H5V18H9.55L8.45 16.9L9.85 15.5L13.35 19ZM14 20V18H19V20ZM5 17V2H19V17H12.775L9.85 14.075L6.925 17ZM12 10Q12.825 10 13.413 9.412Q14 8.825 14 8Q14 7.175 13.413 6.588Q12.825 6 12 6Q11.175 6 10.588 6.588Q10 7.175 10 8Q10 8.825 10.588 9.412Q11.175 10 12 10Z"/>
    </Icon>
  )
});

export default IconMaterialCameraRearSharpFilled;