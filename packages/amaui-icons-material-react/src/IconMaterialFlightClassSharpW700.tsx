import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlightClassSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlightClassSharpW700'
      short_name='FlightClass'

      {...props}
    >
      <path d="M11.225 13.575V3.05H18.775V13.575ZM14.375 10.425H15.625V6.2H14.375ZM7.55 18.2 4.425 7.7V3.05H7.575V7.5L9.925 15.05H18.575V18.2ZM7.425 22.35V19.2H18.575V22.35ZM14.375 6.2H15.625Z"/>
    </Icon>
  )
});

export default IconMaterialFlightClassSharpW700;
