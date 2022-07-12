import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChatBubbleOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatBubbleOutlinedW700Filled'
      short_name='ChatBubble'

      {...props}
    >
      <path d="M1.15 22.85V4.3Q1.15 2.975 2.062 2.062Q2.975 1.15 4.3 1.15H19.7Q21.025 1.15 21.938 2.062Q22.85 2.975 22.85 4.3V15.7Q22.85 17.025 21.938 17.938Q21.025 18.85 19.7 18.85H5.15Z"/>
    </Icon>
  )
});

export default IconMaterialChatBubbleOutlinedW700Filled;
