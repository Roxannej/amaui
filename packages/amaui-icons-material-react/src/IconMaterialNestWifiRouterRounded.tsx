import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNestWifiRouterRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestWifiRouterRounded'
      short_name='NestWifiRouter'

      {...props}
    >
      <path d="M9 21q-2.5 0-4.25-1.75T3 15V9q0-2.5 1.75-4.25T9 3h6q2.5 0 4.25 1.75T21 9v6q0 2.5-1.75 4.25T15 21Zm-4-6h14V9q0-1.65-1.175-2.825Q16.65 5 15 5H9Q7.35 5 6.175 6.175 5 7.35 5 9Zm.55 2q.525.9 1.425 1.45.9.55 2.025.55h6q1.125 0 2.025-.55.9-.55 1.425-1.45ZM12 15Z"/>
    </Icon>
  )
});

export default IconMaterialNestWifiRouterRounded;
