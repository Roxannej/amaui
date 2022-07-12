import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCalendarTodaySharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarTodaySharpW700Filled'
      short_name='CalendarToday'

      {...props}
    >
      <path d="M2.15 22.85V3.15H6V1.15H8.575V3.15H15.425V1.15H18V3.15H21.85V22.85ZM5.3 19.7H18.7V10H5.3Z"/>
    </Icon>
  )
});

export default IconMaterialCalendarTodaySharpW700Filled;
