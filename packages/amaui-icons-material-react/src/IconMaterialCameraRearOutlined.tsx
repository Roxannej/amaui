import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCameraRearOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraRearOutlined'
      short_name='CameraRear'

      {...props}
    >
      <path d="M5 17V4Q5 3.175 5.588 2.587Q6.175 2 7 2H17Q17.825 2 18.413 2.587Q19 3.175 19 4V17H17V4Q17 4 17 4Q17 4 17 4H7Q7 4 7 4Q7 4 7 4V17ZM12 10Q12.825 10 13.413 9.412Q14 8.825 14 8Q14 7.175 13.413 6.588Q12.825 6 12 6Q11.175 6 10.588 6.588Q10 7.175 10 8Q10 8.825 10.588 9.412Q11.175 10 12 10ZM9.85 22.5 8.45 21.1 9.55 20H5V18H9.55L8.45 16.9L9.85 15.5L13.35 19ZM14 20V18H19V20ZM12 10.5Q12 10.5 12 10.5Q12 10.5 12 10.5Q12 10.5 12 10.5Q12 10.5 12 10.5Z"/>
    </Icon>
  )
});

export default IconMaterialCameraRearOutlined;
