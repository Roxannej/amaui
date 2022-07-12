import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCameraRearSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraRearSharpW700Filled'
      short_name='CameraRear'

      {...props}
    >
      <path d="M9.2 23.65 7.525 21.975 8.45 21.075H4.15V18.7H8.45L7.525 17.775L9.2 16.125L12.975 19.875ZM14.45 21.075V18.7H19.85V21.075ZM4.15 16.625V0.475H19.85V16.625H11.125L9.2 14.7L7.3 16.625ZM12 10.275Q12.925 10.275 13.562 9.637Q14.2 9 14.2 8.075Q14.2 7.15 13.562 6.512Q12.925 5.875 12 5.875Q11.075 5.875 10.438 6.512Q9.8 7.15 9.8 8.075Q9.8 9 10.438 9.637Q11.075 10.275 12 10.275Z"/>
    </Icon>
  )
});

export default IconMaterialCameraRearSharpW700Filled;
