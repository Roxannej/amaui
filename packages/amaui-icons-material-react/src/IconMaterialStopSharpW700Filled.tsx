import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStopSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StopSharpW700Filled'
      short_name='Stop'

      {...props}
    >
      <path d="M5.15 18.85V5.15H18.85V18.85Z"/>
    </Icon>
  )
});

export default IconMaterialStopSharpW700Filled;
