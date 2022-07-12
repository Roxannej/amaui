import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialControlCameraOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ControlCameraOutlinedW700'
      short_name='ControlCamera'

      {...props}
    >
      <path d="M12 15.85Q10.4 15.85 9.275 14.725Q8.15 13.6 8.15 12Q8.15 10.4 9.275 9.275Q10.4 8.15 12 8.15Q13.6 8.15 14.725 9.275Q15.85 10.4 15.85 12Q15.85 13.6 14.725 14.725Q13.6 15.85 12 15.85ZM12 23.525 6.95 18.475 9.15 16.275 12 19.075 14.85 16.275 17.05 18.475ZM5.525 17.05 0.475 12 5.525 6.95 7.725 9.15 4.925 12 7.725 14.85ZM9.15 7.725 6.95 5.525 12 0.475 17.05 5.525 14.85 7.725 12 4.925ZM18.475 17.05 16.275 14.85 19.075 12 16.275 9.15 18.475 6.95 23.525 12Z"/>
    </Icon>
  )
});

export default IconMaterialControlCameraOutlinedW700;
