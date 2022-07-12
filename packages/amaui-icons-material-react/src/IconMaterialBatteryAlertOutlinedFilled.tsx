import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatteryAlertOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryAlertOutlinedFilled'
      short_name='BatteryAlert'

      {...props}
    >
      <path d="M8 22Q7.575 22 7.287 21.712Q7 21.425 7 21V5Q7 4.575 7.287 4.287Q7.575 4 8 4H10V2H14V4H16Q16.425 4 16.712 4.287Q17 4.575 17 5V21Q17 21.425 16.712 21.712Q16.425 22 16 22ZM12.05 18Q12.475 18 12.788 17.688Q13.1 17.375 13.1 16.95Q13.1 16.525 12.788 16.212Q12.475 15.9 12.05 15.9Q11.625 15.9 11.312 16.212Q11 16.525 11 16.95Q11 17.375 11.312 17.688Q11.625 18 12.05 18ZM11 14H13V8H11Z"/>
    </Icon>
  )
});

export default IconMaterialBatteryAlertOutlinedFilled;