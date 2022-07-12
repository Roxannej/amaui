import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChargerTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChargerTwoTone'
      short_name='Charger'

      {...props}
    >
      <path d="m11.375 19.525 4.6-9.25H12.75V4.45l-4.625 9.2h3.25ZM12 22.6q-2.225 0-4.15-.825-1.925-.825-3.362-2.263-1.438-1.437-2.263-3.362T1.4 12q0-2.25.825-4.162.825-1.913 2.263-3.351Q5.925 3.05 7.85 2.225T12 1.4q2.25 0 4.163.825 1.912.825 3.35 2.262 1.437 1.438 2.262 3.351Q22.6 9.75 22.6 12q0 2.225-.825 4.15-.825 1.925-2.262 3.362-1.438 1.438-3.35 2.263Q14.25 22.6 12 22.6Z"/>
    </Icon>
  )
});

export default IconMaterialChargerTwoTone;
