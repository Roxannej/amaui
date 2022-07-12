import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCalendarViewDayOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarViewDayOutlinedFilled'
      short_name='CalendarViewDay'

      {...props}
    >
      <path d="M5 17Q4.175 17 3.587 16.413Q3 15.825 3 15V9Q3 8.175 3.587 7.587Q4.175 7 5 7H19Q19.825 7 20.413 7.587Q21 8.175 21 9V15Q21 15.825 20.413 16.413Q19.825 17 19 17ZM3 5V3H21V5ZM3 21V19H21V21Z"/>
    </Icon>
  )
});

export default IconMaterialCalendarViewDayOutlinedFilled;
