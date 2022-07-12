import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEventUpcomingTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventUpcomingTwoTone'
      short_name='EventUpcoming'

      {...props}
    >
      <path d="M15.6 22.6V19.575H18.6Q18.6 19.575 18.6 19.575Q18.6 19.575 18.6 19.575V10.05H5.4V13.725H2.375V6.375Q2.375 5.1 3.25 4.225Q4.125 3.35 5.4 3.35H6.225V1.35H8.675V3.35H15.325V1.35H17.775V3.35H18.6Q19.875 3.35 20.75 4.225Q21.625 5.1 21.625 6.375V19.575Q21.625 20.85 20.75 21.725Q19.875 22.6 18.6 22.6ZM8 24.7 5.9 22.6 7.95 20.5H0.5V17.475H7.95L5.9 15.4L8 13.275L13.725 19Z"/>
    </Icon>
  )
});

export default IconMaterialEventUpcomingTwoTone;