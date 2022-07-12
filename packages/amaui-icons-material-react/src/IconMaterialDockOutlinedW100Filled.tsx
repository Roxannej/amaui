import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDockOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DockOutlinedW100Filled'
      short_name='Dock'

      {...props}
    >
      <path d="M8.8 18.2Q8.15 18.2 7.725 17.775Q7.3 17.35 7.3 16.7V4.3Q7.3 3.65 7.725 3.225Q8.15 2.8 8.8 2.8H15.2Q15.85 2.8 16.275 3.225Q16.7 3.65 16.7 4.3V16.7Q16.7 17.35 16.275 17.775Q15.85 18.2 15.2 18.2ZM16 5.85H8V15.15H16ZM8.65 20.9V20.2H15.35V20.9Z"/>
    </Icon>
  )
});

export default IconMaterialDockOutlinedW100Filled;
