import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialForwardToInboxOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForwardToInboxOutlinedFilled'
      short_name='ForwardToInbox'

      {...props}
    >
      <path d="M19 23 17.6 21.6 19.175 20H15V18H19.175L17.575 16.4L19 15L23 19ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V13.8Q21.325 13.4 20.562 13.2Q19.8 13 19 13Q16.5 13 14.75 14.75Q13 16.5 13 19V20ZM12 13 20 8V6L12 11L4 6V8Z"/>
    </Icon>
  )
});

export default IconMaterialForwardToInboxOutlinedFilled;
