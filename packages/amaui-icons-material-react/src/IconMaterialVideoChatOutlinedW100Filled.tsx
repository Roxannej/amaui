import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideoChatOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoChatOutlinedW100Filled'
      short_name='VideoChat'

      {...props}
    >
      <path d="M8.4 13.35h5.2q.325 0 .538-.213.212-.212.212-.537v-2.2l1.9 1.9V7.7l-1.9 1.9V7.4q0-.325-.212-.538-.213-.212-.538-.212H8.4q-.325 0-.537.212-.213.213-.213.538v5.2q0 .325.213.537.212.213.537.213ZM3.3 19.5V4.8q0-.65.425-1.075Q4.15 3.3 4.8 3.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425H6.1Z"/>
    </Icon>
  )
});

export default IconMaterialVideoChatOutlinedW100Filled;
