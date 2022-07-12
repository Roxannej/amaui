import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocalBarSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalBarSharpW700Filled'
      short_name='LocalBar'

      {...props}
    >
      <path d="M5.425 21.575V18.425H10.425V14.625L2.15 5.3V2.15H21.85V5.3L13.575 14.625V18.425H18.575V21.575ZM7.875 7H16.125L17.65 5.3H6.35Z"/>
    </Icon>
  )
});

export default IconMaterialLocalBarSharpW700Filled;
