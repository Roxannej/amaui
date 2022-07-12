import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPresentToAllTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PresentToAllTwoTone'
      short_name='PresentToAll'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 19.02h18V4.98H3v14.04zM12 8l4 4h-2v4h-4v-4H8l4-4z" opacity=".3"/><path d="M10 16h4v-4h2l-4-4-4 4h2zM21 3H3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h18c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 16.02H3V4.98h18v14.04z"/>
    </Icon>
  )
});

export default IconMaterialPresentToAllTwoTone;
