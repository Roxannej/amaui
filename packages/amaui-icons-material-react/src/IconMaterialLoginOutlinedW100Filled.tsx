import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLoginOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LoginOutlinedW100Filled'
      short_name='Login'

      {...props}
    >
      <path d="M11.6 15.75 11.1 15.25 13.35 13H4.55V12.3H13.35L11.1 10.05L11.6 9.55L14.7 12.65ZM11.7 21V20.3H17.95Q18.25 20.3 18.5 20.05Q18.75 19.8 18.75 19.5V5.8Q18.75 5.5 18.5 5.25Q18.25 5 17.95 5H11.7V4.3H17.95Q18.6 4.3 19.025 4.725Q19.45 5.15 19.45 5.8V19.5Q19.45 20.15 19.025 20.575Q18.6 21 17.95 21Z"/>
    </Icon>
  )
});

export default IconMaterialLoginOutlinedW100Filled;
