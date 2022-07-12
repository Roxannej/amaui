import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDesktopWindowsTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesktopWindowsTwoTone'
      short_name='DesktopWindows'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 4h18v12H3z" opacity=".3"/><path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z"/>
    </Icon>
  )
});

export default IconMaterialDesktopWindowsTwoTone;
