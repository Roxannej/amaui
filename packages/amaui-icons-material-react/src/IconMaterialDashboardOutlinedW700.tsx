import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDashboardOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DashboardOutlinedW700'
      short_name='Dashboard'

      {...props}
    >
      <path d="M12.8 8.65V1.5H22.5V8.65ZM1.5 13.65V1.5H11.2V13.65ZM12.8 22.425V10.275H22.5V22.425ZM1.5 22.425V15.275H11.2V22.425ZM4.65 10.5H8.05V4.65H4.65ZM15.95 19.275H19.35V13.425H15.95ZM15.95 5.5H19.35V4.65H15.95ZM4.65 19.275H8.05V18.425H4.65ZM8.05 10.5ZM15.95 5.5ZM15.95 13.425ZM8.05 18.425Z"/>
    </Icon>
  )
});

export default IconMaterialDashboardOutlinedW700;