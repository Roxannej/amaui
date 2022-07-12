import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSwitchCameraOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchCameraOutlinedW100Filled'
      short_name='SwitchCamera'

      {...props}
    >
      <path d="M9.9 16.15 10.4 15.65 8.15 13.4H15.85L13.6 15.65L14.1 16.15L17.2 13.05L14.1 9.95L13.6 10.45L15.85 12.7H8.15L10.4 10.45L9.9 9.95L6.8 13.05ZM4.8 19.7Q4.15 19.7 3.725 19.275Q3.3 18.85 3.3 18.2V7.8Q3.3 7.15 3.725 6.725Q4.15 6.3 4.8 6.3H7.7L9.55 4.3H14.45L16.3 6.3H19.2Q19.85 6.3 20.275 6.725Q20.7 7.15 20.7 7.8V18.2Q20.7 18.85 20.275 19.275Q19.85 19.7 19.2 19.7Z"/>
    </Icon>
  )
});

export default IconMaterialSwitchCameraOutlinedW100Filled;