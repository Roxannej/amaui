import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEmergencyHomeTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmergencyHomeTwoTone'
      short_name='EmergencyHome'

      {...props}
    >
      <path d="M10.7 13.2h2.625V7.25H10.7Zm1.3 3.675q.55 0 .938-.387.387-.388.387-.913 0-.55-.387-.938-.388-.387-.938-.387-.525 0-.912.387-.388.388-.388.938 0 .525.388.913.387.387.912.387Zm2.125 4.7q-.875.9-2.113.9-1.237 0-2.137-.9l-7.45-7.45q-.9-.9-.9-2.137 0-1.238.9-2.113L9.875 2.4q.9-.875 2.137-.875 1.238 0 2.113.875L21.6 9.875q.875.875.875 2.113 0 1.237-.875 2.137Z"/>
    </Icon>
  )
});

export default IconMaterialEmergencyHomeTwoTone;
