import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlightClassOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlightClassOutlined'
      short_name='FlightClass'

      {...props}
    >
      <path d="M14 13Q13.175 13 12.588 12.412Q12 11.825 12 11V6Q12 5.175 12.588 4.588Q13.175 4 14 4H16Q16.825 4 17.413 4.588Q18 5.175 18 6V11Q18 11.825 17.413 12.412Q16.825 13 16 13ZM14 11H16Q16 11 16 11Q16 11 16 11V6Q16 6 16 6Q16 6 16 6H14Q14 6 14 6Q14 6 14 6V11Q14 11 14 11Q14 11 14 11ZM9.5 18Q8.825 18 8.3 17.613Q7.775 17.225 7.575 16.575L5 8V4H7V8L9.5 16H18V18ZM8 21V19H18V21ZM14 6H16Q16 6 16 6Q16 6 16 6Q16 6 16 6Q16 6 16 6H14Q14 6 14 6Q14 6 14 6Q14 6 14 6Q14 6 14 6Z"/>
    </Icon>
  )
});

export default IconMaterialFlightClassOutlined;
