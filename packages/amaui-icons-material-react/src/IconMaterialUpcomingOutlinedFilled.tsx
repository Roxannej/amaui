import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUpcomingOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UpcomingOutlinedFilled'
      short_name='Upcoming'

      {...props}
    >
      <path d="M17.6 10.8 16.2 9.4 19.75 5.85 21.15 7.25ZM11 8V3H13V8ZM6.4 10.8 2.85 7.25 4.25 5.85 7.8 9.4ZM4 21Q3.175 21 2.588 20.413Q2 19.825 2 19V14Q2 13.175 2.588 12.587Q3.175 12 4 12H9Q9 13.25 9.875 14.125Q10.75 15 12 15Q13.25 15 14.125 14.125Q15 13.25 15 12H20Q20.825 12 21.413 12.587Q22 13.175 22 14V19Q22 19.825 21.413 20.413Q20.825 21 20 21Z"/>
    </Icon>
  )
});

export default IconMaterialUpcomingOutlinedFilled;