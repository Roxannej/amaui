import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNorthWestRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NorthWestRoundedW700'
      short_name='NorthWest'

      {...props}
    >
      <path d="M17.5 19.7 7.575 9.775V14Q7.575 14.65 7.113 15.113Q6.65 15.575 6 15.575Q5.35 15.575 4.888 15.113Q4.425 14.65 4.425 14V6Q4.425 5.35 4.888 4.887Q5.35 4.425 6 4.425H14Q14.65 4.425 15.113 4.887Q15.575 5.35 15.575 6Q15.575 6.65 15.113 7.112Q14.65 7.575 14 7.575H9.775L19.7 17.5Q20.15 17.95 20.15 18.6Q20.15 19.25 19.7 19.7Q19.25 20.15 18.6 20.15Q17.95 20.15 17.5 19.7Z"/>
    </Icon>
  )
});

export default IconMaterialNorthWestRoundedW700;
