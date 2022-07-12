import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMonitorOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonitorOutlinedFilled'
      short_name='Monitor'

      {...props}
    >
      <path d="M6 21V19L7 18H4Q3.175 18 2.588 17.413Q2 16.825 2 16V5Q2 4.175 2.588 3.587Q3.175 3 4 3H20Q20.825 3 21.413 3.587Q22 4.175 22 5V16Q22 16.825 21.413 17.413Q20.825 18 20 18H17L18 19V21Z"/>
    </Icon>
  )
});

export default IconMaterialMonitorOutlinedFilled;
