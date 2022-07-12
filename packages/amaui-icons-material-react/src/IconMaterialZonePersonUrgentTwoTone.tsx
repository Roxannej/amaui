import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialZonePersonUrgentTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ZonePersonUrgentTwoTone'
      short_name='ZonePersonUrgent'

      {...props}
    >
      <path d="M1.375 6.05V3.4q0-1.275.875-2.15T4.4.375h2.65V3.4H4.4v2.65ZM7.05 21.625H4.4q-1.275 0-2.15-.875t-.875-2.15v-2.65H4.4v2.65h2.65ZM19.6 6.05V3.4h-2.65V.375h2.65q1.275 0 2.15.875t.875 2.15v2.65ZM13.4 8.2q-.975 0-1.662-.688-.688-.687-.688-1.662 0-1 .688-1.663.687-.662 1.662-.662 1 0 1.662.662.663.663.663 1.663 0 .975-.663 1.662Q14.4 8.2 13.4 8.2Zm-.375 8.725h-4.65L9.3 12.4l-1.275.5v3.225h-2.65V11.15L9.75 9.425q.925-.375 1.35-.5.425-.125.775-.125.65 0 1.113.325.462.325.812.85l1.05 1.575q.225.3.475.587.25.288.525.513l-1.325 2.325q-.275-.175-.5-.375-.225-.2-.45-.45ZM15 22.5q-.4 0-.75-.2t-.55-.525q-.2-.35-.212-.762-.013-.413.187-.763l4-7.025q.225-.35.563-.537.337-.188.762-.188.4 0 .763.2.362.2.562.55l4 7q.2.375.188.775-.013.4-.213.75-.2.325-.537.525-.338.2-.763.2Zm4-.95q.325 0 .575-.238.25-.237.25-.562 0-.325-.25-.575-.25-.25-.575-.25-.325 0-.562.25-.238.25-.238.575 0 .325.238.562.237.238.562.238Zm-.8-2.8h1.625v-4.075H18.2Z"/>
    </Icon>
  )
});

export default IconMaterialZonePersonUrgentTwoTone;