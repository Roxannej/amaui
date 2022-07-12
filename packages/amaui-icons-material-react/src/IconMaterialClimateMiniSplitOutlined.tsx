import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialClimateMiniSplitOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClimateMiniSplitOutlined'
      short_name='ClimateMiniSplit'

      {...props}
    >
      <path d="M20 12H4q-.825 0-1.412-.588Q2 10.825 2 10V4q0-.825.588-1.413Q3.175 2 4 2h16q.825 0 1.413.587Q22 3.175 22 4v6q0 .825-.587 1.412Q20.825 12 20 12ZM4 19v-2q1.25 0 2.125-.875T7 14h2q0 2.075-1.463 3.538Q6.075 19 4 19Zm16 0q-2.075 0-3.538-1.462Q15 16.075 15 14h2q0 1.25.875 2.125T20 17Zm-9 1v-6h2v6Zm9-10H4h14ZM6 10V8q0-.825.588-1.412Q7.175 6 8 6h8q.825 0 1.413.588Q18 7.175 18 8v2h-2V8H8v2Zm-2 0h16V4H4v6Z"/>
    </Icon>
  )
});

export default IconMaterialClimateMiniSplitOutlined;