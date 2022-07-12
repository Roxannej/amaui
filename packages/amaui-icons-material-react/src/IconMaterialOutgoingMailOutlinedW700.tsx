import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOutgoingMailOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutgoingMailOutlinedW700'
      short_name='OutgoingMail'

      {...props}
    >
      <path d="M19 21.8 16.8 19.6 17.8 18.575H14.425V15.425H17.8L16.8 14.4L19 12.2L23.8 17ZM4.575 19.575Q3.275 19.575 2.35 18.65Q1.425 17.725 1.425 16.425V7.575Q1.425 6.275 2.35 5.35Q3.275 4.425 4.575 4.425H16.425Q17.725 4.425 18.65 5.35Q19.575 6.275 19.575 7.575V10.55H16.425V9.5L10.4 13.7L4.575 9.525V16.425Q4.575 16.425 4.575 16.425Q4.575 16.425 4.575 16.425H12.55V19.575ZM7.225 7.575 10.4 9.85 13.65 7.575Z"/>
    </Icon>
  )
});

export default IconMaterialOutgoingMailOutlinedW700;