import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDesktopMacOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesktopMacOutlinedW100'
      short_name='DesktopMac'

      {...props}
    >
      <path d="M9.65 18.3V17.6L11.5 15.75H4.8Q4.15 15.75 3.725 15.325Q3.3 14.9 3.3 14.25V5.8Q3.3 5.15 3.725 4.725Q4.15 4.3 4.8 4.3H19.2Q19.85 4.3 20.275 4.725Q20.7 5.15 20.7 5.8V14.25Q20.7 14.9 20.275 15.325Q19.85 15.75 19.2 15.75H12.5L14.35 17.6V18.3ZM4 14H20V5.8Q20 5.5 19.75 5.25Q19.5 5 19.2 5H4.8Q4.5 5 4.25 5.25Q4 5.5 4 5.8ZM4 14V5.8Q4 5.45 4 5.225Q4 5 4 5Q4 5 4 5.225Q4 5.45 4 5.8V14Z"/>
    </Icon>
  )
});

export default IconMaterialDesktopMacOutlinedW100;
