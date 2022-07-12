import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMotionSensorUrgentOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MotionSensorUrgentOutlined'
      short_name='MotionSensorUrgent'

      {...props}
    >
      <path d="M14 22q-.275 0-.487-.137-.213-.138-.363-.363-.125-.225-.138-.488-.012-.262.113-.512l4-7q.15-.225.388-.375.237-.15.512-.15t.5.138q.225.137.35.387l4 7q.15.225.138.5-.013.275-.138.5-.15.225-.375.363-.225.137-.5.137Zm4-1q.2 0 .35-.15.15-.15.15-.35 0-.2-.15-.35Q18.2 20 18 20q-.2 0-.35.15-.15.15-.15.35 0 .2.15.35.15.15.35.15Zm-.5-2h1v-4h-1ZM5.1 12h2q.3 1.475 1.363 2.537Q9.525 15.6 11 15.9v2q-2.3-.35-3.925-1.975T5.1 12ZM11 4.1v2q-1.475.3-2.537 1.362Q7.4 8.525 7.1 10h-2q.35-2.3 1.975-3.938Q8.7 4.425 11 4.1ZM12 9q.85 0 1.425.575Q14 10.15 14 11q0 .825-.575 1.412Q12.85 13 12 13q-.825 0-1.412-.588Q10 11.825 10 11q0-.85.588-1.425Q11.175 9 12 9Zm1-4.9q2.3.35 3.938 1.975Q18.575 7.7 18.9 10h-2q-.3-1.475-1.362-2.538Q14.475 6.4 13 6.1ZM2 7V3q0-.825.588-1.413Q3.175 1 4 1h4v2H4v4Zm6 14H4q-.825 0-1.412-.587Q2 19.825 2 19v-4h2v4h4ZM20 7V3h-4V1h4q.825 0 1.413.587Q22 2.175 22 3v4Z"/>
    </Icon>
  )
});

export default IconMaterialMotionSensorUrgentOutlined;