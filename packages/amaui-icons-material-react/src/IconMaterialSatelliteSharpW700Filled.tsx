import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSatelliteSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SatelliteSharpW700Filled'
      short_name='Satellite'

      {...props}
    >
      <path d="M6.3 12.3Q8.8 12.3 10.55 10.55Q12.3 8.8 12.3 6.3H10.6Q10.6 8.1 9.35 9.35Q8.1 10.6 6.3 10.6ZM6.3 8.9Q7.375 8.9 8.113 8.137Q8.85 7.375 8.85 6.3H6.3ZM5.575 17.3H18.425L14.25 11.5L11.25 15.5L9 12.5ZM2.15 21.85V2.15H21.85V21.85Z"/>
    </Icon>
  )
});

export default IconMaterialSatelliteSharpW700Filled;
