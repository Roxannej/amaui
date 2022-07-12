import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialForwardToInboxOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForwardToInboxOutlinedW100Filled'
      short_name='ForwardToInbox'

      {...props}
    >
      <path d="M18.5 21.425 18.025 20.95 20.225 18.7H15.15V18H20.25L18 15.75L18.5 15.275L21.575 18.35ZM4.8 18.7Q4.15 18.7 3.725 18.275Q3.3 17.85 3.3 17.2V6.8Q3.3 6.15 3.725 5.725Q4.15 5.3 4.8 5.3H19.2Q19.85 5.3 20.275 5.725Q20.7 6.15 20.7 6.8V14.125Q20.125 13.85 19.663 13.75Q19.2 13.65 18.575 13.65Q16.525 13.65 15.088 15.087Q13.65 16.525 13.65 18.575V18.7ZM12 11.85 20 6.575 19.6 6 12 11 4.4 6 4 6.575Z"/>
    </Icon>
  )
});

export default IconMaterialForwardToInboxOutlinedW100Filled;
