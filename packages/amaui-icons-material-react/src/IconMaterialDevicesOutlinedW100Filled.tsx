import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDevicesOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DevicesOutlinedW100Filled'
      short_name='Devices'

      {...props}
    >
      <path d="M3.275 18.4V17.35H5.275V6.75Q5.275 6.1 5.7 5.675Q6.125 5.25 6.775 5.25H20.325V5.95H6.775Q6.475 5.95 6.225 6.2Q5.975 6.45 5.975 6.75V17.35H11.325V18.4ZM16.025 18.4Q15.725 18.4 15.525 18.2Q15.325 18 15.325 17.7V9.65Q15.325 9.35 15.525 9.15Q15.725 8.95 16.025 8.95H20.025Q20.325 8.95 20.525 9.15Q20.725 9.35 20.725 9.65V17.7Q20.725 18 20.525 18.2Q20.325 18.4 20.025 18.4ZM16.025 17.35H20.025V9.65H16.025Z"/>
    </Icon>
  )
});

export default IconMaterialDevicesOutlinedW100Filled;
