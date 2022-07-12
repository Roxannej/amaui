import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMarkChatUnreadSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkChatUnreadSharpW700Filled'
      short_name='MarkChatUnread'

      {...props}
    >
      <path d="M19 6.5Q17.65 6.5 16.7 5.55Q15.75 4.6 15.75 3.25Q15.75 1.9 16.7 0.95Q17.65 0 19 0Q20.35 0 21.3 0.95Q22.25 1.9 22.25 3.25Q22.25 4.6 21.3 5.55Q20.35 6.5 19 6.5ZM1.15 22.85V1.15H14.225Q13.875 1.875 13.788 2.688Q13.7 3.5 13.875 4.3Q14.275 6.1 15.7 7.287Q17.125 8.475 19 8.475Q20.1 8.475 21.1 8.037Q22.1 7.6 22.85 6.775V18.85H5.15Z"/>
    </Icon>
  )
});

export default IconMaterialMarkChatUnreadSharpW700Filled;
