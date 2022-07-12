import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSmartOutletRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartOutletRoundedW700Filled'
      short_name='SmartOutlet'

      {...props}
    >
      <path d="M7.2 13.2h2.375V8.8H7.2Zm3.6 4h2.4V16q0-.55-.325-.875Q12.55 14.8 12 14.8t-.875.325q-.325.325-.325.875Zm3.625-4H16.8V8.8h-2.375ZM12 22.85q-2.275 0-4.25-.85t-3.438-2.312Q2.85 18.225 2 16.25q-.85-1.975-.85-4.25T2 7.75q.85-1.975 2.312-3.438Q5.775 2.85 7.75 2q1.975-.85 4.25-.85t4.25.85q1.975.85 3.438 2.312Q21.15 5.775 22 7.75q.85 1.975.85 4.25T22 16.25q-.85 1.975-2.312 3.438Q18.225 21.15 16.25 22q-1.975.85-4.25.85Z"/>
    </Icon>
  )
});

export default IconMaterialSmartOutletRoundedW700Filled;