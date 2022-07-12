import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVoiceChatOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VoiceChatOutlined'
      short_name='VoiceChat'

      {...props}
    >
      <path d="M8 14H14Q14.425 14 14.713 13.712Q15 13.425 15 13V11L17 13V7L15 9V7Q15 6.575 14.713 6.287Q14.425 6 14 6H8Q7.575 6 7.287 6.287Q7 6.575 7 7V13Q7 13.425 7.287 13.712Q7.575 14 8 14ZM2 22V4Q2 3.175 2.588 2.587Q3.175 2 4 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V16Q22 16.825 21.413 17.413Q20.825 18 20 18H6ZM4 17.175 5.175 16H20Q20 16 20 16Q20 16 20 16V4Q20 4 20 4Q20 4 20 4H4Q4 4 4 4Q4 4 4 4ZM4 4Q4 4 4 4Q4 4 4 4Q4 4 4 4Q4 4 4 4V16Q4 16 4 16Q4 16 4 16V17.175Z"/>
    </Icon>
  )
});

export default IconMaterialVoiceChatOutlined;