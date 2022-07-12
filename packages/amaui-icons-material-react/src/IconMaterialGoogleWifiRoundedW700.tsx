import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGoogleWifiRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GoogleWifiRoundedW700'
      short_name='GoogleWifi'

      {...props}
    >
      <path d="m4.475 20.625-.35-1.1H3.55q-.95 0-1.575-.663Q1.35 18.2 1.4 17.25L2.175 5.4q.05-.85.687-1.438.638-.587 1.488-.587h15.325q.85 0 1.475.587.625.588.675 1.438l.775 11.85q.05.95-.575 1.612-.625.663-1.575.663h-.575l-.35 1.1ZM4.025 9.85h15.95l-.325-4.3H4.325ZM3.9 12l-.35 5.375h16.9L20.1 12Zm8.1-.55Z"/>
    </Icon>
  )
});

export default IconMaterialGoogleWifiRoundedW700;
