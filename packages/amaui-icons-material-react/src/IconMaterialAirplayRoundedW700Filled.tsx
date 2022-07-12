import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAirplayRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirplayRoundedW700Filled'
      short_name='Airplay'

      {...props}
    >
      <path d="M9.425 21.85Q8.375 21.85 8.05 20.975Q7.725 20.1 8.475 19.35L10.9 16.95Q11.15 16.7 11.425 16.6Q11.7 16.5 12 16.5Q12.3 16.5 12.575 16.6Q12.85 16.7 13.1 16.95L15.525 19.35Q16.275 20.1 15.95 20.975Q15.625 21.85 14.575 21.85ZM3.125 19.575Q2.325 19.3 1.738 18.538Q1.15 17.775 1.15 16.7V5.3Q1.15 4 2.075 3.075Q3 2.15 4.3 2.15H19.7Q21 2.15 21.925 3.075Q22.85 4 22.85 5.3V16.7Q22.85 17.775 22.263 18.538Q21.675 19.3 20.875 19.575H20.65L14.225 13.15Q13.775 12.7 13.188 12.462Q12.6 12.225 12 12.225Q11.4 12.225 10.812 12.462Q10.225 12.7 9.775 13.15L3.35 19.575Z"/>
    </Icon>
  )
});

export default IconMaterialAirplayRoundedW700Filled;
