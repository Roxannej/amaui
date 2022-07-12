import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMonitoringTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonitoringTwoTone'
      short_name='Monitoring'

      {...props}
    >
      <path d="M2.5 16.875V12.6L10 5.075L14 9.075L21.525 1.575V5.85L14 13.35L10 9.35ZM18.625 21.5V10.675L21.525 7.775V21.5ZM6.525 21.5V14.775L9.45 11.85V21.5ZM10.575 21.5V11.85L13.475 14.75V21.5ZM14.6 21.5V14.7L17.5 11.8V21.5ZM2.5 21.5V18.8L5.4 15.9V21.5Z"/>
    </Icon>
  )
});

export default IconMaterialMonitoringTwoTone;
