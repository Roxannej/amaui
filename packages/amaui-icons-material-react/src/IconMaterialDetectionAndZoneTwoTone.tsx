import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDetectionAndZoneTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DetectionAndZoneTwoTone'
      short_name='DetectionAndZone'

      {...props}
    >
      <path d="M1.375 7.05V4.4q0-1.275.875-2.15t2.15-.875h2.65V4.4H4.4v2.65ZM7.05 22.625H4.4q-1.275 0-2.15-.875t-.875-2.15v-2.65H4.4v2.65h2.65Zm9.9 0V19.6h2.65v-2.65h3.025v2.65q0 1.275-.875 2.15t-2.15.875ZM19.6 7.05V4.4h-2.65V1.375h2.65q1.275 0 2.15.875t.875 2.15v2.65ZM13.4 9.2q-.975 0-1.662-.688-.688-.687-.688-1.662 0-1 .688-1.663.687-.662 1.662-.662 1 0 1.662.662.663.663.663 1.663 0 .975-.663 1.662Q14.4 9.2 13.4 9.2Zm-.375 8.725h-4.65L9.3 13.4l-1.275.5v3.225h-2.65V12.15l4.375-1.725q.925-.375 1.35-.5.425-.125.775-.125.65 0 1.113.325.462.325.812.85l1.05 1.575q.625.9 1.475 1.525.85.625 2.35.625v2.65q-1.675 0-2.875-.6t-2.225-1.6Z"/>
    </Icon>
  )
});

export default IconMaterialDetectionAndZoneTwoTone;