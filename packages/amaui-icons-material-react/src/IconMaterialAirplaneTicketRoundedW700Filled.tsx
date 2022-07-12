import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAirplaneTicketRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirplaneTicketRoundedW700Filled'
      short_name='AirplaneTicket'

      {...props}
    >
      <path d="M9.575 15.5 17.875 13.3Q18.25 13.2 18.438 12.85Q18.625 12.5 18.525 12.1Q18.425 11.725 18.087 11.537Q17.75 11.35 17.375 11.45L14.925 12.1L11.2 8.65Q11.075 8.525 10.888 8.462Q10.7 8.4 10.5 8.45Q10.1 8.55 9.963 8.887Q9.825 9.225 10.025 9.575L11.925 12.9L9.525 13.5L8.475 12.725Q8.375 12.65 8.238 12.612Q8.1 12.575 7.975 12.625Q7.7 12.7 7.613 12.925Q7.525 13.15 7.675 13.4L8.65 15.125Q8.775 15.375 9.038 15.475Q9.3 15.575 9.575 15.5ZM4 20.85Q2.825 20.85 1.988 20.013Q1.15 19.175 1.15 18V13.55Q1.95 13.55 2.55 13.112Q3.15 12.675 3.15 12Q3.15 11.275 2.55 10.862Q1.95 10.45 1.15 10.45V6Q1.15 4.8 1.988 3.975Q2.825 3.15 4 3.15H20Q21.2 3.15 22.025 3.975Q22.85 4.8 22.85 6V18Q22.85 19.175 22.025 20.013Q21.2 20.85 20 20.85Z"/>
    </Icon>
  )
});

export default IconMaterialAirplaneTicketRoundedW700Filled;
