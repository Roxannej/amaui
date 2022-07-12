import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialForwardToInboxOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForwardToInboxOutlined'
      short_name='ForwardToInbox'

      {...props}
    >
      <path d="M12 13 4 8V18Q4 18 4 18Q4 18 4 18H13V19V20H4Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V13Q21.525 13 21.025 13Q20.525 13 20 13V8ZM12 11 20 6H4ZM19 23 17.6 21.6 19.175 20H15V18H19.175L17.575 16.4L19 15L23 19ZM4 8V18Q4 18 4 18Q4 18 4 18V19Q4 16.5 4 14.75Q4 13 4 13Q4 13 4 13.012Q4 13.025 4 13.075V8V6Z"/>
    </Icon>
  )
});

export default IconMaterialForwardToInboxOutlined;
