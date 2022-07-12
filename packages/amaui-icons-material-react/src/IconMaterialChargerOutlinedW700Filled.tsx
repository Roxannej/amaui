import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChargerOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChargerOutlinedW700Filled'
      short_name='Charger'

      {...props}
    >
      <path d="m11.3 19.675 4.8-9.45h-3.3v-5.9l-4.8 9.4h3.3Zm.7 3.175q-2.275 0-4.25-.85t-3.438-2.312Q2.85 18.225 2 16.25q-.85-1.975-.85-4.25T2 7.75q.85-1.975 2.312-3.438Q5.775 2.85 7.75 2q1.975-.85 4.25-.85t4.25.85q1.975.85 3.438 2.312Q21.15 5.775 22 7.75q.85 1.975.85 4.25T22 16.25q-.85 1.975-2.312 3.438Q18.225 21.15 16.25 22q-1.975.85-4.25.85Z"/>
    </Icon>
  )
});

export default IconMaterialChargerOutlinedW700Filled;