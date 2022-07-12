import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMarkChatUnreadOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkChatUnreadOutlined'
      short_name='MarkChatUnread'

      {...props}
    >
      <path d="M5.175 16H20Q20 16 20 16Q20 16 20 16V7.9Q20.575 7.775 21.075 7.562Q21.575 7.35 22 7V16Q22 16.825 21.413 17.413Q20.825 18 20 18H6L2 22V4Q2 3.175 2.588 2.587Q3.175 2 4 2H14.1Q14 2.5 14 3Q14 3.5 14.1 4H4Q4 4 4 4Q4 4 4 4V17.175ZM4 4Q4 4 4 4Q4 4 4 4V16Q4 16 4 16Q4 16 4 16V4Q4 4 4 4Q4 4 4 4Q4 4 4 4Q4 4 4 4ZM19 6Q17.75 6 16.875 5.125Q16 4.25 16 3Q16 1.75 16.875 0.875Q17.75 0 19 0Q20.25 0 21.125 0.875Q22 1.75 22 3Q22 4.25 21.125 5.125Q20.25 6 19 6Z"/>
    </Icon>
  )
});

export default IconMaterialMarkChatUnreadOutlined;
