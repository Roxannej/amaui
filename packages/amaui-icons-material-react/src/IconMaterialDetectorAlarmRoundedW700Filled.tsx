import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDetectorAlarmRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DetectorAlarmRoundedW700Filled'
      short_name='DetectorAlarm'

      {...props}
    >
      <path d="M13.575 21.825h-3.15v-6.15h3.15Zm8.525-4.5-2.2 2.2-4.375-4.325 2.25-2.25ZM8.475 15.2 4.1 19.525l-2.2-2.2 4.325-4.375ZM8.25 8.9h7.5l.275-1h-8.05l.275 1Zm0 3.15q-1.125 0-1.975-.675-.85-.675-1.1-1.75l-.4-1.725H4.35q-1.3 0-2.225-.925T1.2 4.75V.6h21.6v4.15q0 1.3-.925 2.225T19.65 7.9h-.425L18.8 9.65q-.275 1.05-1.125 1.725t-1.95.675Z"/>
    </Icon>
  )
});

export default IconMaterialDetectorAlarmRoundedW700Filled;
