import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSettingsAlertTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsAlertTwoTone'
      short_name='SettingsAlert'

      {...props}
    >
      <path d="M12 16.875q.575 0 .988-.413.412-.412.412-.962 0-.575-.412-.988-.413-.412-.988-.412-.55 0-.962.412-.413.413-.413.988 0 .55.413.962.412.413.962.413Zm-1.375-3.65H13.4v-6h-2.775ZM8.675 22.6l-.45-3.4q.15.05-.012-.025-.163-.075-.588-.275L4.5 20.225l-3.375-5.9 2.725-2.05V11.675l-2.725-2.05L4.5 3.8l3.225 1.325q.1-.075.2-.137.1-.063.3-.138l.45-3.475h6.675l.45 3.45q.15.05.275.125.125.075.25.175l3.2-1.325L22.9 9.625l-2.825 2.1V12q0 .1-.013.162-.012.063-.012.113l2.8 2.05-3.4 5.9-3.175-1.35q-.075.075-.162.137-.088.063-.313.188l-.45 3.4Z"/>
    </Icon>
  )
});

export default IconMaterialSettingsAlertTwoTone;