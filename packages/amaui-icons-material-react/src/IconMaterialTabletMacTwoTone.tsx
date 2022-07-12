import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTabletMacTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabletMacTwoTone'
      short_name='TabletMac'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 3h15v16H4z" opacity=".3"/><path d="M18.5 0h-14C3.12 0 2 1.12 2 2.5v19C2 22.88 3.12 24 4.5 24h14c1.38 0 2.5-1.12 2.5-2.5v-19C21 1.12 19.88 0 18.5 0zm-7 23c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7.5-4H4V3h15v16z"/>
    </Icon>
  )
});

export default IconMaterialTabletMacTwoTone;
