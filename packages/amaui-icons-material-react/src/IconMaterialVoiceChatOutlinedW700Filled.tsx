import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVoiceChatOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VoiceChatOutlinedW700Filled'
      short_name='VoiceChat'

      {...props}
    >
      <path d="M8 14H14Q14.425 14 14.713 13.712Q15 13.425 15 13V11L17 13V7L15 9V7Q15 6.575 14.713 6.287Q14.425 6 14 6H8Q7.575 6 7.287 6.287Q7 6.575 7 7V13Q7 13.425 7.287 13.712Q7.575 14 8 14ZM1.15 22.85V4.3Q1.15 2.975 2.062 2.062Q2.975 1.15 4.3 1.15H19.7Q21.025 1.15 21.938 2.062Q22.85 2.975 22.85 4.3V15.7Q22.85 17.025 21.938 17.938Q21.025 18.85 19.7 18.85H5.15Z"/>
    </Icon>
  )
});

export default IconMaterialVoiceChatOutlinedW700Filled;
