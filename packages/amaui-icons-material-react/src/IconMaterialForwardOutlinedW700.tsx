import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialForwardOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForwardOutlinedW700'
      short_name='Forward'

      {...props}
    >
      <path d="M2.3 19.575V15Q2.3 12.675 3.925 11.05Q5.55 9.425 7.875 9.425H15.7L12.675 6.4L14.875 4.2L21.7 11L14.875 17.8L12.675 15.6L15.7 12.575H7.875Q6.85 12.575 6.15 13.275Q5.45 13.975 5.45 15V19.575Z"/>
    </Icon>
  )
});

export default IconMaterialForwardOutlinedW700;