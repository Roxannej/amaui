import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGateTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GateTwoTone'
      short_name='Gate'

      {...props}
    >
      <path d="M.3 17.925V6.05h2.65v11.875Zm20.775 0V6.05h2.65v11.875Zm-17 2.3V8.55q0-1.975 1.4-3.388Q6.875 3.75 8.85 3.75h2.225v7.3h-2.7v1.875h2.7v7.3Zm8.875 0v-7.3h2.7V11.05h-2.7v-7.3h2.2q1.975 0 3.388 1.412Q19.95 6.575 19.95 8.55v11.675Z"/>
    </Icon>
  )
});

export default IconMaterialGateTwoTone;
