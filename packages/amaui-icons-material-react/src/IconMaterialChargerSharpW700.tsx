import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChargerSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChargerSharpW700'
      short_name='Charger'

      {...props}
    >
      <path d="m11.3 19.675 4.8-9.45h-3.3v-5.9l-4.8 9.4h3.3Zm.7 3.175q-2.275 0-4.25-.85t-3.438-2.312Q2.85 18.225 2 16.25q-.85-1.975-.85-4.25T2 7.75q.85-1.975 2.312-3.438Q5.775 2.85 7.75 2q1.975-.85 4.25-.85t4.25.85q1.975.85 3.438 2.312Q21.15 5.775 22 7.75q.85 1.975.85 4.25T22 16.25q-.85 1.975-2.312 3.438Q18.225 21.15 16.25 22q-1.975.85-4.25.85ZM12 12Zm0 7.7q3.2 0 5.45-2.238Q19.7 15.225 19.7 12q0-3.225-2.25-5.463Q15.2 4.3 12 4.3T6.55 6.537Q4.3 8.775 4.3 12t2.25 5.462Q8.8 19.7 12 19.7Z"/>
    </Icon>
  )
});

export default IconMaterialChargerSharpW700;
