import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatteryAlertSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryAlertSharpW700'
      short_name='BatteryAlert'

      {...props}
    >
      <path d="M6.15 22.85V3.15H9.15V1.15H14.85V3.15H17.85V22.85ZM12 18.525Q12.55 18.525 12.938 18.15Q13.325 17.775 13.325 17.225Q13.325 16.675 12.938 16.288Q12.55 15.9 12 15.9Q11.45 15.9 11.075 16.288Q10.7 16.675 10.7 17.225Q10.7 17.775 11.075 18.15Q11.45 18.525 12 18.525ZM10.8 14.65H13.2V7.5H10.8Z"/>
    </Icon>
  )
});

export default IconMaterialBatteryAlertSharpW700;