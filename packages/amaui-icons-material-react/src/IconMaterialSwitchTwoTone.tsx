import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSwitchTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchTwoTone'
      short_name='Switch'

      {...props}
    >
      <path d="M8.075 16.925h7.875V7.05H8.075ZM9.95 15.05V8.925h4.125v6.125Zm1.125-3.125h1.875V10.05h-1.875Zm-5.675 9.7q-1.275 0-2.15-.875t-.875-2.15V5.4q0-1.275.875-2.15t2.15-.875h13.2q1.275 0 2.15.875t.875 2.15v13.2q0 1.275-.875 2.15t-2.15.875Z"/>
    </Icon>
  )
});

export default IconMaterialSwitchTwoTone;