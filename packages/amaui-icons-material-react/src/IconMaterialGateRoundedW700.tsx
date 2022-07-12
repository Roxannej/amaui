import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGateRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GateRoundedW700'
      short_name='Gate'

      {...props}
    >
      <path d="M.225 18V6H3v12ZM4 20.3V8.55q0-2 1.425-3.425Q6.85 3.7 8.85 3.7h6.3q2 0 3.425 1.425Q20 6.55 20 8.55V20.3Zm2.775-2.775h3.85v-4.15H8.3v-2.75h2.325v-4.15H8.85q-.875 0-1.475.6-.6.6-.6 1.475Zm6.6 0h3.85V8.55q0-.875-.6-1.475-.6-.6-1.475-.6h-1.775v4.15H15.7v2.75h-2.325ZM21 18V6h2.775v12Zm-9-6Z"/>
    </Icon>
  )
});

export default IconMaterialGateRoundedW700;