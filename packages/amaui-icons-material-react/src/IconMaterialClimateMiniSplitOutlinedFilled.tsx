import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialClimateMiniSplitOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClimateMiniSplitOutlinedFilled'
      short_name='ClimateMiniSplit'

      {...props}
    >
      <path d="M4 12q-.825 0-1.412-.588Q2 10.825 2 10V4q0-.825.588-1.413Q3.175 2 4 2h16q.825 0 1.413.587Q22 3.175 22 4v6q0 .825-.587 1.412Q20.825 12 20 12h-2V8q0-.825-.587-1.412Q16.825 6 16 6H8q-.825 0-1.412.588Q6 7.175 6 8v4Zm0 7v-2q1.25 0 2.125-.875T7 14h2q0 2.075-1.463 3.538Q6.075 19 4 19Zm4-7V8h8v4Zm3 8v-6h2v6Zm9-1q-2.075 0-3.538-1.462Q15 16.075 15 14h2q0 1.25.875 2.125T20 17Z"/>
    </Icon>
  )
});

export default IconMaterialClimateMiniSplitOutlinedFilled;
