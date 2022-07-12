import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExitToAppOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExitToAppOutlinedW100Filled'
      short_name='ExitToApp'

      {...props}
    >
      <path d="M3.8 12.35V11.65H12.75L10 8.9L10.5 8.4L14.1 12L10.5 15.6L10 15.1L12.75 12.35ZM4.5 15.35V18.2Q4.5 18.5 4.75 18.75Q5 19 5.3 19H18.7Q19 19 19.25 18.75Q19.5 18.5 19.5 18.2V5.8Q19.5 5.5 19.25 5.25Q19 5 18.7 5H5.3Q5 5 4.75 5.25Q4.5 5.5 4.5 5.8V8.65H3.8V5.8Q3.8 5.15 4.225 4.725Q4.65 4.3 5.3 4.3H18.7Q19.35 4.3 19.775 4.725Q20.2 5.15 20.2 5.8V18.2Q20.2 18.85 19.775 19.275Q19.35 19.7 18.7 19.7H5.3Q4.65 19.7 4.225 19.275Q3.8 18.85 3.8 18.2V15.35Z"/>
    </Icon>
  )
});

export default IconMaterialExitToAppOutlinedW100Filled;
