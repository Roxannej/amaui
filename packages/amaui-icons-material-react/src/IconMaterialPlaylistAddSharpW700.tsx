import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPlaylistAddSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlaylistAddSharpW700'
      short_name='PlaylistAdd'

      {...props}
    >
      <path d="M16.2 20.525V16.925H12.575V13.775H16.2V10.15H19.35V13.775H22.95V16.925H19.35V20.525ZM2.425 16.925V13.775H10.95V16.925ZM2.425 12.15V9H14.575V12.15ZM2.425 7.375V4.225H14.575V7.375Z"/>
    </Icon>
  )
});

export default IconMaterialPlaylistAddSharpW700;
