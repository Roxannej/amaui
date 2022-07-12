import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialQuickreplyOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuickreplyOutlinedW100'
      short_name='Quickreply'

      {...props}
    >
      <path d="M5.8 16H14.9V16.7H6.1L3.3 19.5V4.8Q3.3 4.15 3.725 3.725Q4.15 3.3 4.8 3.3H19.2Q19.85 3.3 20.275 3.725Q20.7 4.15 20.7 4.8V9.5H20V4.8Q20 4.45 19.775 4.225Q19.55 4 19.2 4H4.8Q4.45 4 4.225 4.225Q4 4.45 4 4.8V17.8ZM4 16V17.8V4Q4 4 4 4Q4 4 4 4Q4 4 4 4Q4 4 4 4ZM18.9 20.1V16.7H17.9V12.5H20.025L19.075 15.5H20.7Z"/>
    </Icon>
  )
});

export default IconMaterialQuickreplyOutlinedW100;
