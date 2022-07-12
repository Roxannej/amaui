import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlightLandOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlightLandOutlinedW700'
      short_name='FlightLand'

      {...props}
    >
      <path d="M2.425 21.575V18.425H21.575V21.575ZM18.7 16.425 2.425 11.925V5.2L4.95 6.05L5.65 8.15L9.425 9.175V1.275L12.45 2L15.2 10.8L19.9 12.125Q20.65 12.325 21.113 12.925Q21.575 13.525 21.575 14.3Q21.575 15.425 20.688 16.075Q19.8 16.725 18.7 16.425Z"/>
    </Icon>
  )
});

export default IconMaterialFlightLandOutlinedW700;