import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMonitorOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonitorOutlined'
      short_name='Monitor'

      {...props}
    >
      <path d="M6 21V19L7 18H4Q3.175 18 2.588 17.413Q2 16.825 2 16V5Q2 4.175 2.588 3.587Q3.175 3 4 3H20Q20.825 3 21.413 3.587Q22 4.175 22 5V16Q22 16.825 21.413 17.413Q20.825 18 20 18H17L18 19V21ZM4 16H20Q20 16 20 16Q20 16 20 16V5Q20 5 20 5Q20 5 20 5H4Q4 5 4 5Q4 5 4 5V16Q4 16 4 16Q4 16 4 16ZM4 16Q4 16 4 16Q4 16 4 16V5Q4 5 4 5Q4 5 4 5Q4 5 4 5Q4 5 4 5V16Q4 16 4 16Q4 16 4 16Z"/>
    </Icon>
  )
});

export default IconMaterialMonitorOutlined;
