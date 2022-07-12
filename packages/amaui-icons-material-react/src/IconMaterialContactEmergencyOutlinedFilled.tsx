import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialContactEmergencyOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactEmergencyOutlinedFilled'
      short_name='ContactEmergency'

      {...props}
    >
      <path d="M17.25 12h1.5v-1.7l1.475.85.75-1.3L19.5 9l1.475-.85-.75-1.3-1.475.85V6h-1.5v1.7l-1.475-.85-.75 1.3L16.5 9l-1.475.85.75 1.3 1.475-.85ZM2 21q-.825 0-1.412-.587Q0 19.825 0 19V5q0-.825.588-1.413Q1.175 3 2 3h20q.825 0 1.413.587Q24 4.175 24 5v14q0 .825-.587 1.413Q22.825 21 22 21Zm7-7q1.25 0 2.125-.875T12 11q0-1.25-.875-2.125T9 8q-1.25 0-2.125.875T6 11q0 1.25.875 2.125T9 14Zm-6.9 5h13.8q-1.05-1.875-2.9-2.938Q11.15 15 9 15t-4 1.062Q3.15 17.125 2.1 19Z"/>
    </Icon>
  )
});

export default IconMaterialContactEmergencyOutlinedFilled;