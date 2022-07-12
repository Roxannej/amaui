import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideoChatOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoChatOutlined'
      short_name='VideoChat'

      {...props}
    >
      <path d="M8 14h6q.425 0 .713-.288Q15 13.425 15 13v-2l2 2V7l-2 2V7q0-.425-.287-.713Q14.425 6 14 6H8q-.425 0-.713.287Q7 6.575 7 7v6q0 .425.287.712Q7.575 14 8 14Zm-6 8V4q0-.825.588-1.413Q3.175 2 4 2h16q.825 0 1.413.587Q22 3.175 22 4v12q0 .825-.587 1.413Q20.825 18 20 18H6Zm2-4.825L5.175 16H20V4H4ZM4 4v13.175Z"/>
    </Icon>
  )
});

export default IconMaterialVideoChatOutlined;
