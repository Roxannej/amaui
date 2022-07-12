import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMonitorOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonitorOutlinedW100Filled'
      short_name='Monitor'

      {...props}
    >
      <path d="M8.3 19.7V18.55L10.15 16.7H4.8Q4.15 16.7 3.725 16.275Q3.3 15.85 3.3 15.2V5.8Q3.3 5.15 3.725 4.725Q4.15 4.3 4.8 4.3H19.2Q19.85 4.3 20.275 4.725Q20.7 5.15 20.7 5.8V15.2Q20.7 15.85 20.275 16.275Q19.85 16.7 19.2 16.7H13.85L15.7 18.55V19.7Z"/>
    </Icon>
  )
});

export default IconMaterialMonitorOutlinedW100Filled;
