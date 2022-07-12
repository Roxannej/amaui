import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlightLandRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlightLandRoundedW700Filled'
      short_name='FlightLand'

      {...props}
    >
      <path d="M4 21.575Q3.35 21.575 2.888 21.112Q2.425 20.65 2.425 20Q2.425 19.35 2.888 18.888Q3.35 18.425 4 18.425H20Q20.65 18.425 21.113 18.888Q21.575 19.35 21.575 20Q21.575 20.65 21.113 21.112Q20.65 21.575 20 21.575ZM18.7 16.425 3.575 12.225Q3.075 12.1 2.75 11.675Q2.425 11.25 2.425 10.725V7.075Q2.425 6.3 2.95 5.925Q3.475 5.55 4.225 5.8Q4.525 5.9 4.812 6.187Q5.1 6.475 5.2 6.775L5.65 8.15L9.425 9.175V3.275Q9.425 2.45 10 2Q10.575 1.55 11.4 1.75Q11.825 1.875 12.238 2.25Q12.65 2.625 12.775 3.05L15.2 10.8L19.9 12.125Q20.65 12.325 21.113 12.925Q21.575 13.525 21.575 14.3Q21.575 15.425 20.688 16.075Q19.8 16.725 18.7 16.425Z"/>
    </Icon>
  )
});

export default IconMaterialFlightLandRoundedW700Filled;
