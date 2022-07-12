import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAutoScheduleOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoScheduleOutlinedFilled'
      short_name='AutoSchedule'

      {...props}
    >
      <path d="m12 19-1.25-2.75L8 15l2.75-1.25L12 11l1.25 2.75L16 15l-2.75 1.25Zm-7 3q-.825 0-1.413-.587Q3 20.825 3 20V6q0-.825.587-1.412Q4.175 4 5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588Q21 5.175 21 6v14q0 .825-.587 1.413Q19.825 22 19 22Zm0-2h14V10H5v10Z"/>
    </Icon>
  )
});

export default IconMaterialAutoScheduleOutlinedFilled;
