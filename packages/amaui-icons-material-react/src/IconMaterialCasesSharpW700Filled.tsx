import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCasesSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CasesSharpW700Filled'
      short_name='Cases'

      {...props}
    >
      <path d="M0.225 23.525V9.375H3.375V20.375H20V23.525ZM4.85 18.925V5H9.55V0.225H19.075V5H23.775V18.925ZM12.7 5H15.925V3.375H12.7Z"/>
    </Icon>
  )
});

export default IconMaterialCasesSharpW700Filled;