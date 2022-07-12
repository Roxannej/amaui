import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCameraFrontOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraFrontOutlinedFilled'
      short_name='CameraFront'

      {...props}
    >
      <path d="M9.85 22.5 8.45 21.1 9.55 20H5V18H9.55L8.45 16.9L9.85 15.5L13.35 19ZM14 20V18H19V20ZM5 17V4Q5 3.175 5.588 2.587Q6.175 2 7 2H17Q17.825 2 18.413 2.587Q19 3.175 19 4V17H12.775L9.85 14.075L6.925 17ZM7 13.15Q8.2 12.575 9.463 12.287Q10.725 12 12 12Q13.275 12 14.538 12.287Q15.8 12.575 17 13.15V4Q17 4 17 4Q17 4 17 4H7Q7 4 7 4Q7 4 7 4ZM12 11Q10.75 11 9.875 10.125Q9 9.25 9 8Q9 6.75 9.875 5.875Q10.75 5 12 5Q13.25 5 14.125 5.875Q15 6.75 15 8Q15 9.25 14.125 10.125Q13.25 11 12 11Z"/>
    </Icon>
  )
});

export default IconMaterialCameraFrontOutlinedFilled;
