import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSouthWestRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SouthWestRoundedW700Filled'
      short_name='SouthWest'

      {...props}
    >
      <path d="M6 19.575Q5.35 19.575 4.888 19.112Q4.425 18.65 4.425 18V10Q4.425 9.35 4.888 8.887Q5.35 8.425 6 8.425Q6.65 8.425 7.113 8.887Q7.575 9.35 7.575 10V14.225L17.5 4.3Q17.95 3.85 18.6 3.85Q19.25 3.85 19.7 4.3Q20.15 4.75 20.15 5.412Q20.15 6.075 19.7 6.525L9.775 16.425H14Q14.65 16.425 15.113 16.888Q15.575 17.35 15.575 18Q15.575 18.65 15.113 19.112Q14.65 19.575 14 19.575Z"/>
    </Icon>
  )
});

export default IconMaterialSouthWestRoundedW700Filled;