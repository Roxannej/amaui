import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMotionSensorActiveOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MotionSensorActiveOutlined'
      short_name='MotionSensorActive'

      {...props}
    >
      <path d="M5.1 13h2q.3 1.475 1.363 2.538Q9.525 16.6 11 16.9v2q-2.3-.35-3.925-1.975T5.1 13ZM11 5.1v2q-1.475.3-2.537 1.362Q7.4 9.525 7.1 11h-2q.35-2.3 1.975-3.938Q8.7 5.425 11 5.1Zm1 4.9q.85 0 1.425.575Q14 11.15 14 12q0 .825-.575 1.412Q12.85 14 12 14q-.825 0-1.412-.588Q10 12.825 10 12q0-.85.588-1.425Q11.175 10 12 10Zm4.9 3h2q-.325 2.3-1.962 3.925Q15.3 18.55 13 18.9v-2q1.475-.3 2.538-1.362Q16.6 14.475 16.9 13ZM13 5.1q2.3.35 3.938 1.975Q18.575 8.7 18.9 11h-2q-.3-1.475-1.362-2.538Q14.475 7.4 13 7.1ZM2 8V4q0-.825.588-1.413Q3.175 2 4 2h4v2H4v4Zm6 14H4q-.825 0-1.412-.587Q2 20.825 2 20v-4h2v4h4Zm8 0v-2h4v-4h2v4q0 .825-.587 1.413Q20.825 22 20 22Zm4-14V4h-4V2h4q.825 0 1.413.587Q22 3.175 22 4v4Z"/>
    </Icon>
  )
});

export default IconMaterialMotionSensorActiveOutlined;
