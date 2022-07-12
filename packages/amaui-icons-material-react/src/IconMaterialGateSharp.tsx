import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGateSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GateSharp'
      short_name='Gate'

      {...props}
    >
      <path d="M2 17V7h2v10Zm3 2V9q0-1.65 1.175-2.825Q7.35 5 9 5h6q1.65 0 2.825 1.175Q19 7.35 19 9v10Zm2-2h4v-4H9v-2h2V7H9q-.825 0-1.412.587Q7 8.175 7 9Zm6 0h4V9q0-.825-.587-1.413Q15.825 7 15 7h-2v4h2v2h-2Zm7 0V7h2v10Zm-8-5Z"/>
    </Icon>
  )
});

export default IconMaterialGateSharp;
