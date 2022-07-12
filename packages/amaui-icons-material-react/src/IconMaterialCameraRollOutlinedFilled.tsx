import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCameraRollOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraRollOutlinedFilled'
      short_name='CameraRoll'

      {...props}
    >
      <path d="M22 20H14Q14 20.825 13.413 21.413Q12.825 22 12 22H4Q3.175 22 2.588 21.413Q2 20.825 2 20V5Q2 4.175 2.588 3.587Q3.175 3 4 3H5V2Q5 1.575 5.287 1.287Q5.575 1 6 1H10Q10.425 1 10.713 1.287Q11 1.575 11 2V3H12Q12.825 3 13.413 3.587Q14 4.175 14 5H22ZM9 17H11V15H9ZM9 10H11V8H9ZM13 17H15V15H13ZM13 10H15V8H13ZM17 17H19V15H17ZM17 10H19V8H17Z"/>
    </Icon>
  )
});

export default IconMaterialCameraRollOutlinedFilled;