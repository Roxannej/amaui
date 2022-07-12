import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlightClassOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlightClassOutlinedW100Filled'
      short_name='FlightClass'

      {...props}
    >
      <path d="M14.675 11.7Q14.1 11.7 13.713 11.312Q13.325 10.925 13.325 10.35V6.65Q13.325 6.075 13.713 5.688Q14.1 5.3 14.675 5.3H15.35Q15.925 5.3 16.312 5.688Q16.7 6.075 16.7 6.65V10.35Q16.7 10.925 16.312 11.312Q15.925 11.7 15.35 11.7ZM9.675 16.7Q9.375 16.7 9.125 16.525Q8.875 16.35 8.775 16.075L6.3 8.075V5.3H7V8L9.5 16H17.375V16.7ZM8.65 19.7V19H17.35V19.7Z"/>
    </Icon>
  )
});

export default IconMaterialFlightClassOutlinedW100Filled;
