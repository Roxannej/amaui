import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCallSplitOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallSplitOutlinedW700Filled'
      short_name='CallSplit'

      {...props}
    >
      <path d="M15.65 10.625 13.4 8.375 15.175 6.575H13.425V3.425H20.575V10.575H17.425V8.825ZM10.425 20.575V12.625L6.575 8.775V10.575H3.425V3.425H10.575V6.575H8.775L13.575 11.375V20.575Z"/>
    </Icon>
  )
});

export default IconMaterialCallSplitOutlinedW700Filled;