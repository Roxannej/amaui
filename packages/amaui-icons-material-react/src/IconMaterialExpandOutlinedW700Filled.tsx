import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExpandOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpandOutlinedW700Filled'
      short_name='Expand'

      {...props}
    >
      <path d="M3.425 23.525V20.375H20.575V23.525ZM3.425 3.625V0.475H20.575V3.625ZM12 19.375 7.35 14.725 9.275 12.8 10.625 14.125V9.875L9.275 11.2L7.35 9.275L12 4.625L16.65 9.275L14.725 11.2L13.375 9.875V14.125L14.725 12.8L16.65 14.725Z"/>
    </Icon>
  )
});

export default IconMaterialExpandOutlinedW700Filled;
