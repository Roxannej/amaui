import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideoChatSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoChatSharpW700'
      short_name='VideoChat'

      {...props}
    >
      <path d="M7 14h8v-3l2 2V7l-2 2V6H7Zm-5.85 8.85V1.15h21.7v17.7H5.15Zm3.15-6.875.275-.275H19.7V4.3H4.3Zm0 0V4.3v11.4Z"/>
    </Icon>
  )
});

export default IconMaterialVideoChatSharpW700;
