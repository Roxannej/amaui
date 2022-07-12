import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMarkChatReadOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkChatReadOutlined'
      short_name='MarkChatRead'

      {...props}
    >
      <path d="M17.35 20 13.825 16.45 15.225 15.05 17.35 17.175 21.6 12.925 23 14.35ZM5.175 16H12V18H6L2 22V4Q2 3.175 2.588 2.587Q3.175 2 4 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V11H20V4Q20 4 20 4Q20 4 20 4H4Q4 4 4 4Q4 4 4 4V17.175ZM4 16V4Q4 4 4 4Q4 4 4 4Q4 4 4 4Q4 4 4 4Z"/>
    </Icon>
  )
});

export default IconMaterialMarkChatReadOutlined;
