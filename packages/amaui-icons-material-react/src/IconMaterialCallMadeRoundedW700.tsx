import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCallMadeRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallMadeRoundedW700'
      short_name='CallMade'

      {...props}
    >
      <path d="M4.3 19.7Q3.85 19.25 3.85 18.6Q3.85 17.95 4.3 17.5L14.225 7.575H10Q9.35 7.575 8.887 7.112Q8.425 6.65 8.425 6Q8.425 5.35 8.887 4.887Q9.35 4.425 10 4.425H18Q18.65 4.425 19.113 4.887Q19.575 5.35 19.575 6V14Q19.575 14.65 19.113 15.113Q18.65 15.575 18 15.575Q17.35 15.575 16.888 15.113Q16.425 14.65 16.425 14V9.775L6.475 19.725Q6.025 20.175 5.388 20.163Q4.75 20.15 4.3 19.7Z"/>
    </Icon>
  )
});

export default IconMaterialCallMadeRoundedW700;