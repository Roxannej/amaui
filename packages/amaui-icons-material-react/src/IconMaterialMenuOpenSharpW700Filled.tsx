import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMenuOpenSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MenuOpenSharpW700Filled'
      short_name='MenuOpen'

      {...props}
    >
      <path d="M1.65 18.95V15.8H15.8V18.95ZM1.65 13.575V10.425H12.8V13.575ZM1.65 8.2V5.05H15.8V8.2ZM20.15 17.8 14.35 12 20.15 6.2 22.35 8.4 18.75 12 22.35 15.6Z"/>
    </Icon>
  )
});

export default IconMaterialMenuOpenSharpW700Filled;
