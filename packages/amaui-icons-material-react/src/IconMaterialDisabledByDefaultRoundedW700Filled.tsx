import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDisabledByDefaultRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DisabledByDefaultRoundedW700Filled'
      short_name='DisabledByDefault'

      {...props}
    >
      <path d="M5.3 21.85Q4 21.85 3.075 20.925Q2.15 20 2.15 18.7V5.3Q2.15 4 3.075 3.075Q4 2.15 5.3 2.15H18.7Q20 2.15 20.925 3.075Q21.85 4 21.85 5.3V18.7Q21.85 20 20.925 20.925Q20 21.85 18.7 21.85ZM7.575 16.425Q7.925 16.775 8.4 16.775Q8.875 16.775 9.225 16.425L12 13.675L14.775 16.425Q15.125 16.775 15.6 16.775Q16.075 16.775 16.425 16.425Q16.775 16.075 16.775 15.6Q16.775 15.125 16.425 14.775L13.675 12L16.425 9.225Q16.775 8.875 16.775 8.4Q16.775 7.925 16.425 7.575Q16.075 7.225 15.6 7.225Q15.125 7.225 14.775 7.575L12 10.325L9.225 7.575Q8.875 7.225 8.4 7.225Q7.925 7.225 7.575 7.575Q7.225 7.925 7.225 8.4Q7.225 8.875 7.575 9.225L10.325 12L7.575 14.775Q7.225 15.125 7.225 15.6Q7.225 16.075 7.575 16.425Z"/>
    </Icon>
  )
});

export default IconMaterialDisabledByDefaultRoundedW700Filled;
