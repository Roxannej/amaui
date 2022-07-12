import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlightClassOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlightClassOutlinedW700Filled'
      short_name='FlightClass'

      {...props}
    >
      <path d="M13.8 13.575Q12.725 13.575 11.975 12.825Q11.225 12.075 11.225 11V5.625Q11.225 4.55 11.975 3.8Q12.725 3.05 13.8 3.05H16.2Q17.275 3.05 18.025 3.8Q18.775 4.55 18.775 5.625V11Q18.775 12.075 18.025 12.825Q17.275 13.575 16.2 13.575ZM9.5 18.2Q8.625 18.2 7.95 17.7Q7.275 17.2 7.025 16.375L4.425 7.7V3.05H7.575V7.5L9.925 15.05H18.575V18.2ZM7.425 22.35V19.2H18.575V22.35Z"/>
    </Icon>
  )
});

export default IconMaterialFlightClassOutlinedW700Filled;
