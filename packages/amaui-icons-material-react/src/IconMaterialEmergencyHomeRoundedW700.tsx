import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEmergencyHomeRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmergencyHomeRoundedW700'
      short_name='EmergencyHome'

      {...props}
    >
      <path d="M14.225 21.825q-.475.475-1.037.7-.563.225-1.188.225-.6 0-1.175-.225-.575-.225-1.05-.7l-7.6-7.6q-.475-.475-.7-1.05-.225-.575-.225-1.2 0-.6.225-1.163.225-.562.7-1.037l7.6-7.6q.475-.475 1.05-.7.575-.225 1.2-.225.6 0 1.163.225.562.225 1.037.7l7.6 7.6q.475.475.7 1.037.225.563.225 1.188 0 .6-.225 1.175-.225.575-.7 1.05ZM12 19.575 19.575 12 12 4.425 4.425 12 12 19.575Zm0-6.375q.575 0 .975-.413.4-.412.4-.987V8.575q0-.575-.4-.975T12 7.2q-.575 0-.975.4t-.4.975V11.8q0 .575.4.987.4.413.975.413Zm0 3.75q.575 0 .975-.4t.4-.975q0-.575-.4-.975T12 14.2q-.575 0-.975.4t-.4.975q0 .575.4.975t.975.4ZM12 12Z"/>
    </Icon>
  )
});

export default IconMaterialEmergencyHomeRoundedW700;
