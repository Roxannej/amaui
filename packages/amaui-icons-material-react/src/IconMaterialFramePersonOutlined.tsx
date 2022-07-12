import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFramePersonOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FramePersonOutlined'
      short_name='FramePerson'

      {...props}
    >
      <path d="M3 23q-.825 0-1.412-.587Q1 21.825 1 21v-3h2v3h3v2Zm15 0v-2h3v-3h2v3q0 .825-.587 1.413Q21.825 23 21 23ZM5 19v-3.35q0-.5.213-.925.212-.425.612-.7 1.275-.95 2.938-1.488Q10.425 12 12 12q1.575 0 3.238.537 1.662.538 2.937 1.488.4.275.613.7.212.425.212.925V19Zm2-2h10v-1.35q-1.05-.775-2.375-1.212Q13.3 14 12 14t-2.625.425Q8.05 14.85 7 15.625Zm5-6q-1.65 0-2.825-1.175Q8 8.65 8 7q0-1.65 1.175-2.825Q10.35 3 12 3q1.65 0 2.825 1.175Q16 5.35 16 7q0 1.65-1.175 2.825Q13.65 11 12 11Zm0-2q.825 0 1.413-.588Q14 7.825 14 7t-.587-1.412Q12.825 5 12 5q-.825 0-1.412.588Q10 6.175 10 7t.588 1.412Q11.175 9 12 9ZM1 6V3q0-.825.588-1.413Q2.175 1 3 1h3v2H3v3Zm20 0V3h-3V1h3q.825 0 1.413.587Q23 2.175 23 3v3Zm-9 11Zm0-10Z"/>
    </Icon>
  )
});

export default IconMaterialFramePersonOutlined;