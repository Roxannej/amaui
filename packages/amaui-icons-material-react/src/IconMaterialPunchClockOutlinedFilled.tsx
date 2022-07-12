import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPunchClockOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PunchClockOutlinedFilled'
      short_name='PunchClock'

      {...props}
    >
      <path d="M5 22Q4.175 22 3.587 21.413Q3 20.825 3 20V8Q3 7.175 3.587 6.588Q4.175 6 5 6H6V1H18V6H19Q19.825 6 20.413 6.588Q21 7.175 21 8V20Q21 20.825 20.413 21.413Q19.825 22 19 22ZM8 6H16V3H8ZM12 18.2Q13.725 18.2 14.963 16.962Q16.2 15.725 16.2 14Q16.2 12.275 14.963 11.037Q13.725 9.8 12 9.8Q10.275 9.8 9.038 11.037Q7.8 12.275 7.8 14Q7.8 15.725 9.038 16.962Q10.275 18.2 12 18.2ZM13.15 15.85 11.5 14.2V11.5H12.5V13.8L13.85 15.15Z"/>
    </Icon>
  )
});

export default IconMaterialPunchClockOutlinedFilled;
