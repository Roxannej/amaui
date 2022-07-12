import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEvChargerTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EvChargerTwoTone'
      short_name='EvCharger'

      {...props}
    >
      <path d="m8.55 18.925 2.5-4h-1.5v-3l-2.5 4h1.5Zm-2.45-8.85H12V5.1H6.1Zm-3.025 11.85V5.1q0-1.275.875-2.15t2.15-.875H12q1.275 0 2.15.875t.875 2.15v7.65h1.3q.95 0 1.6.637.65.638.65 1.588V19.3q0 .35.275.6t.65.25q.375 0 .638-.25.262-.25.262-.6V9.725h-.05q-.625 0-1.05-.438-.425-.437-.425-1.062v-2.35h.5v-1.75H20.8v1.75h.975v-1.75h1.45v1.75h.5v2.35q0 .625-.437 1.062-.438.438-1.063.438h-.05v9.55q0 1.1-.775 1.875-.775.775-1.9.775t-1.913-.762q-.787-.763-.787-1.888v-4.75h-1.775v7.4Z"/>
    </Icon>
  )
});

export default IconMaterialEvChargerTwoTone;