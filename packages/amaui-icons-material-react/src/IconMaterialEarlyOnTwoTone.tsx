import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEarlyOnTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EarlyOnTwoTone'
      short_name='EarlyOn'

      {...props}
    >
      <path d="M17 19q-1.25 0-2.125-.875T14 16q0-1.25.875-2.125T17 13q1.25 0 2.125.875T20 16q0 1.25-.875 2.125T17 19Zm-.75-7v-2h1.5v2Zm0 10v-2h1.5v2Zm4.125-8.325-1.075-1.05 1.425-1.425 1.05 1.075Zm-7.1 7.1-1.05-1.05L13.65 18.3l1.05 1.05ZM21 16.75v-1.5h2v1.5Zm-10 0v-1.5h2v1.5Zm9.725 4.025-1.4-1.425 1.05-1.05 1.425 1.4Zm-7.1-7.075-1.4-1.425 1.05-1.05 1.425 1.4ZM5 20q-.825 0-1.413-.587Q3 18.825 3 18V4q0-.825.587-1.413Q4.175 2 5 2h1V0h2v2h8V0h2v2h1q.825 0 1.413.587Q21 3.175 21 4v4H5v10h4v2ZM5 6h14V4H5Zm0 0V4v2Z"/>
    </Icon>
  )
});

export default IconMaterialEarlyOnTwoTone;
