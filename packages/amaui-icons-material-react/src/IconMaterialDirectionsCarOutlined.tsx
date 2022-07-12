import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDirectionsCarOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsCarOutlined'
      short_name='DirectionsCar'

      {...props}
    >
      <path d="M6 19V20Q6 20.425 5.713 20.712Q5.425 21 5 21H4Q3.575 21 3.288 20.712Q3 20.425 3 20V12L5.1 6Q5.25 5.55 5.638 5.275Q6.025 5 6.5 5H17.5Q17.975 5 18.363 5.275Q18.75 5.55 18.9 6L21 12V20Q21 20.425 20.712 20.712Q20.425 21 20 21H19Q18.575 21 18.288 20.712Q18 20.425 18 20V19ZM5.8 10H18.2L17.15 7H6.85ZM5 12V17ZM7.5 16Q8.125 16 8.562 15.562Q9 15.125 9 14.5Q9 13.875 8.562 13.438Q8.125 13 7.5 13Q6.875 13 6.438 13.438Q6 13.875 6 14.5Q6 15.125 6.438 15.562Q6.875 16 7.5 16ZM16.5 16Q17.125 16 17.562 15.562Q18 15.125 18 14.5Q18 13.875 17.562 13.438Q17.125 13 16.5 13Q15.875 13 15.438 13.438Q15 13.875 15 14.5Q15 15.125 15.438 15.562Q15.875 16 16.5 16ZM5 17H19V12H5Z"/>
    </Icon>
  )
});

export default IconMaterialDirectionsCarOutlined;