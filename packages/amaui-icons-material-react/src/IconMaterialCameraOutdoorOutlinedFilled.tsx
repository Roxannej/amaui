import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCameraOutdoorOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraOutdoorOutlinedFilled'
      short_name='CameraOutdoor'

      {...props}
    >
      <path d="M13 18Q12.575 18 12.288 17.712Q12 17.425 12 17V13Q12 12.575 12.288 12.287Q12.575 12 13 12H17Q17.425 12 17.712 12.287Q18 12.575 18 13V14L20 12.95V17.05L18 16V17Q18 17.425 17.712 17.712Q17.425 18 17 18ZM4 21V9L12 3L20 9V11H13Q12.175 11 11.588 11.587Q11 12.175 11 13V17Q11 17.825 11.588 18.413Q12.175 19 13 19H20V21Z"/>
    </Icon>
  )
});

export default IconMaterialCameraOutdoorOutlinedFilled;
