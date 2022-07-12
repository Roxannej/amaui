import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialContactEmergencyOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactEmergencyOutlined'
      short_name='ContactEmergency'

      {...props}
    >
      <path d="M17.25 12h1.5v-1.7l1.475.85.75-1.3L19.5 9l1.475-.85-.75-1.3-1.475.85V6h-1.5v1.7l-1.475-.85-.75 1.3L16.5 9l-1.475.85.75 1.3 1.475-.85ZM2 21q-.825 0-1.412-.587Q0 19.825 0 19V5q0-.825.588-1.413Q1.175 3 2 3h20q.825 0 1.413.587Q24 4.175 24 5v14q0 .825-.587 1.413Q22.825 21 22 21Zm13.9-2H22V5H2v14h.1q1.05-1.875 2.9-2.938Q6.85 15 9 15t4 1.062q1.85 1.063 2.9 2.938ZM9 14q1.25 0 2.125-.875T12 11q0-1.25-.875-2.125T9 8q-1.25 0-2.125.875T6 11q0 1.25.875 2.125T9 14Zm-4.45 5h8.9q-.85-.95-2.012-1.475Q10.275 17 9 17q-1.275 0-2.425.525T4.55 19ZM9 12q-.425 0-.712-.288Q8 11.425 8 11t.288-.713Q8.575 10 9 10t.713.287Q10 10.575 10 11t-.287.712Q9.425 12 9 12Zm3 0Z"/>
    </Icon>
  )
});

export default IconMaterialContactEmergencyOutlined;
