import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlightRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlightRoundedW700Filled'
      short_name='Flight'

      {...props}
    >
      <path d="M9.6 22.3Q8.9 22.5 8.413 22.125Q7.925 21.75 7.925 21.025Q7.925 20.675 8.125 20.3Q8.325 19.925 8.6 19.725L9.925 18.725V14.275L3.475 16.15Q2.625 16.4 2.025 15.95Q1.425 15.5 1.425 14.6Q1.425 14.2 1.663 13.787Q1.9 13.375 2.25 13.175L9.925 8.65V3.5Q9.925 2.6 10.525 2.012Q11.125 1.425 12 1.425Q12.9 1.425 13.488 2.012Q14.075 2.6 14.075 3.5V8.65L21.75 13.175Q22.1 13.375 22.338 13.787Q22.575 14.2 22.575 14.625Q22.575 15.5 21.975 15.95Q21.375 16.4 20.525 16.15L14.075 14.275V18.725L15.425 19.725Q15.7 19.925 15.887 20.3Q16.075 20.675 16.075 21.025Q16.075 21.75 15.588 22.125Q15.1 22.5 14.4 22.3L12 21.625Z"/>
    </Icon>
  )
});

export default IconMaterialFlightRoundedW700Filled;
