import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDevicesRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DevicesRoundedFilled'
      short_name='Devices'

      {...props}
    >
      <path d="M4 17V6Q4 5.175 4.588 4.588Q5.175 4 6 4H20Q20.425 4 20.712 4.287Q21 4.575 21 5Q21 5.425 20.712 5.713Q20.425 6 20 6H6Q6 6 6 6Q6 6 6 6V17H10.5Q11.125 17 11.562 17.438Q12 17.875 12 18.5Q12 19.125 11.562 19.562Q11.125 20 10.5 20H3.5Q2.875 20 2.438 19.562Q2 19.125 2 18.5Q2 17.875 2.438 17.438Q2.875 17 3.5 17ZM15 20Q14.575 20 14.288 19.712Q14 19.425 14 19V9Q14 8.575 14.288 8.287Q14.575 8 15 8H21Q21.425 8 21.712 8.287Q22 8.575 22 9V19Q22 19.425 21.712 19.712Q21.425 20 21 20ZM16 17H20V10H16Z"/>
    </Icon>
  )
});

export default IconMaterialDevicesRoundedFilled;
