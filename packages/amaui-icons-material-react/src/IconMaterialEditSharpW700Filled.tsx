import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditSharpW700Filled'
      short_name='Edit'

      {...props}
    >
      <path d="M19.4 9.2 15.025 4.85 17.925 1.925 22.4 6.225ZM2.825 21.4V17.025L13.575 6.275L17.975 10.65L7.225 21.4Z"/>
    </Icon>
  )
});

export default IconMaterialEditSharpW700Filled;
