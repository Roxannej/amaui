import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDevicesOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DevicesOutlinedW700'
      short_name='Devices'

      {...props}
    >
      <path d="M1.625 21.15V17H3.625V6Q3.625 4.675 4.537 3.762Q5.45 2.85 6.775 2.85H21V6H6.775Q6.775 6 6.775 6Q6.775 6 6.775 6V17H11.625V21.15ZM14.425 21.15Q13.925 21.15 13.575 20.8Q13.225 20.45 13.225 19.95V8.8Q13.225 8.3 13.538 7.962Q13.85 7.625 14.425 7.625H21.2Q21.775 7.625 22.075 7.962Q22.375 8.3 22.375 8.8V19.95Q22.375 20.45 22.038 20.8Q21.7 21.15 21.2 21.15ZM15.625 17H20V10H15.625Z"/>
    </Icon>
  )
});

export default IconMaterialDevicesOutlinedW700;
