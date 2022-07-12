import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialContactEmergencySharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactEmergencySharpW700Filled'
      short_name='ContactEmergency'

      {...props}
    >
      <path d="M16.425 12.375h2V10.85l1.3.775 1-1.75-1.3-.75 1.3-.75-1-1.75-1.3.775V5.875h-2V7.4l-1.3-.775-1 1.75 1.3.75-1.3.75 1 1.75 1.3-.775ZM0 21.375V2.625h24v18.75ZM9.7 13.8q1.35 0 2.263-.913.912-.912.912-2.262t-.912-2.275q-.913-.925-2.263-.925-1.35 0-2.275.925-.925.925-.925 2.275 0 1.35.925 2.262.925.913 2.275.913Zm-6.825 4.825h13.8q-1.05-1.875-2.9-2.937-1.85-1.063-4-1.063t-4 1.063q-1.85 1.062-2.9 2.937Z"/>
    </Icon>
  )
});

export default IconMaterialContactEmergencySharpW700Filled;
