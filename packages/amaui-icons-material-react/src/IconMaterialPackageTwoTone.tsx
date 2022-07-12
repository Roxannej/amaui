import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPackageTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PackageTwoTone'
      short_name='Package'

      {...props}
    >
      <path d="M5.4 21.625q-1.275 0-2.15-.875t-.875-2.15V5.4q0-1.275.875-2.15t2.15-.875h13.2q1.275 0 2.15.875t.875 2.15v13.2q0 1.275-.875 2.15t-2.15.875Zm4.525-9.675L12 10.925l2.075 1.025q.775.375 1.488-.075.712-.45.712-1.275V5.4H7.75v5.2q0 .825.713 1.275.712.45 1.462.075ZM7.75 17.625h2.8q.575 0 .988-.413.412-.412.412-.962 0-.575-.412-.988-.413-.412-.988-.412h-2.8q-.55 0-.963.412-.412.413-.412.988 0 .55.412.962.413.413.963.413Z"/>
    </Icon>
  )
});

export default IconMaterialPackageTwoTone;
