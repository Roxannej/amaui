import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMenuSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MenuSharpW700Filled'
      short_name='Menu'

      {...props}
    >
      <path d="M2.425 18.95V15.8H21.575V18.95ZM2.425 13.575V10.425H21.575V13.575ZM2.425 8.2V5.05H21.575V8.2Z"/>
    </Icon>
  )
});

export default IconMaterialMenuSharpW700Filled;
