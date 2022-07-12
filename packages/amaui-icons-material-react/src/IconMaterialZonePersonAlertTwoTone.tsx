import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialZonePersonAlertTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ZonePersonAlertTwoTone'
      short_name='ZonePersonAlert'

      {...props}
    >
      <path d="M4.4 20.625q-1.275 0-2.15-.875t-.875-2.15v-2.65H4.4v2.65h2.65v3.025Zm3.975-4.7L9.3 11.4l-1.275.5v3.225h-2.65V10.15L9.75 8.425q.925-.375 1.35-.5.425-.125.775-.125.65 0 1.113.325.462.325.812.85l1.05 1.575q.1.125.188.25.087.125.187.25-1.25.8-2.075 2.05-.825 1.25-1.025 2.825ZM13.4 7.2q-.975 0-1.662-.688-.688-.687-.688-1.662 0-1 .688-1.663.687-.662 1.662-.662 1 0 1.662.662.663.663.663 1.663 0 .975-.663 1.662Q14.4 7.2 13.4 7.2ZM1.375 5.05V2.4q0-1.275.875-2.15T4.4-.625h2.65V2.4H4.4v2.65Zm18.225 0V2.4h-2.65V-.625h2.65q1.275 0 2.15.875t.875 2.15v2.65Zm-.725 16.6q-2 0-3.412-1.413-1.413-1.412-1.413-3.412 0-2.025 1.413-3.425 1.412-1.4 3.412-1.4 2.025 0 3.425 1.4t1.4 3.425q0 2-1.4 3.412-1.4 1.413-3.425 1.413Zm-.675-4.175h1.35v-3.85H18.2Zm.675 2.65q.35 0 .575-.225.225-.225.225-.575t-.225-.587q-.225-.238-.575-.238t-.575.238q-.225.237-.225.587t.225.575q.225.225.575.225Z"/>
    </Icon>
  )
});

export default IconMaterialZonePersonAlertTwoTone;
