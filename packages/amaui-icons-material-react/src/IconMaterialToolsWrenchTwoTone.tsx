import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialToolsWrenchTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToolsWrenchTwoTone'
      short_name='ToolsWrench'

      {...props}
    >
      <path d="m17.175 21.475-6.65-6.65q-.475.15-.975.225-.5.075-1.025.075-2.825 0-4.825-2T1.7 8.3q0-1.075.263-1.988.262-.912.987-1.962l3.8 3.8L8.4 6.525 4.575 2.7Q5.6 2 6.538 1.725 7.475 1.45 8.5 1.45q2.85 0 4.85 2 2 2 2 4.85 0 .525-.087 1.037-.088.513-.238 1.013l6.625 6.6q.9.9.912 2.125.013 1.225-.862 2.125l-.225.225q-.9.9-2.15.925-1.25.025-2.15-.875Z"/>
    </Icon>
  )
});

export default IconMaterialToolsWrenchTwoTone;
