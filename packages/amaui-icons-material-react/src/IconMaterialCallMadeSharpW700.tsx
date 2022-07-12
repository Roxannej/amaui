import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCallMadeSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallMadeSharpW700'
      short_name='CallMade'

      {...props}
    >
      <path d="M5.4 20.8 3.2 18.6 14.225 7.575H8.425V4.425H19.575V15.575H16.425V9.775Z"/>
    </Icon>
  )
});

export default IconMaterialCallMadeSharpW700;
