import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEmergencyRecordingOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmergencyRecordingOutlined'
      short_name='EmergencyRecording'

      {...props}
    >
      <path d="M4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H16Q16.825 4 17.413 4.588Q18 5.175 18 6V10.5L22 6.5V17.5L18 13.5V18Q18 18.825 17.413 19.413Q16.825 20 16 20ZM4 18H16Q16 18 16 18Q16 18 16 18V6Q16 6 16 6Q16 6 16 6H4Q4 6 4 6Q4 6 4 6V18Q4 18 4 18Q4 18 4 18ZM4 18Q4 18 4 18Q4 18 4 18V6Q4 6 4 6Q4 6 4 6Q4 6 4 6Q4 6 4 6V18Q4 18 4 18Q4 18 4 18ZM9 17H11V13.725L14 15.45L15 13.725L12 12L15 10.275L14 8.55L11 10.275V7H9V10.275L6 8.55L5 10.275L8 12L5 13.725L6 15.45L9 13.725Z"/>
    </Icon>
  )
});

export default IconMaterialEmergencyRecordingOutlined;
