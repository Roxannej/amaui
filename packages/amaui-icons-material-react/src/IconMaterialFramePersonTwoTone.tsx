import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFramePersonTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FramePersonTwoTone'
      short_name='FramePerson'

      {...props}
    >
      <path d="M3.4 23.625q-1.275 0-2.15-.875T.375 20.6v-2.65H3.4v2.65h2.65v3.025Zm14.55 0V20.6h2.65v-2.65h3.025v2.65q0 1.275-.875 2.15t-2.15.875Zm-13.125-4.45V15.65q0-.525.237-.988.238-.462.663-.787 1.3-.95 2.988-1.513Q10.4 11.8 12 11.8q1.6 0 3.3.562 1.7.563 3 1.513.4.325.65.8.25.475.25.975v3.525ZM12 10.925q-1.625 0-2.775-1.15T8.075 7q0-1.65 1.15-2.8T12 3.05q1.65 0 2.8 1.15T15.95 7q0 1.625-1.15 2.775t-2.8 1.15ZM.375 6.05V3.4q0-1.275.875-2.15T3.4.375h2.65V3.4H3.4v2.65Zm20.225 0V3.4h-2.65V.375h2.65q1.275 0 2.15.875t.875 2.15v2.65Z"/>
    </Icon>
  )
});

export default IconMaterialFramePersonTwoTone;