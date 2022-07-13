import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHumidityLowSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HumidityLowSharp'
      short_name='HumidityLow'

      {...props}
    >
      <path d="M12 21.5q-3.325 0-5.662-2.312Q4 16.875 4 13.6q0-1.65.613-3.063.612-1.412 1.737-2.487L12 2.5l5.65 5.55q1.125 1.075 1.738 2.487Q20 11.95 20 13.6q0 3.275-2.337 5.588Q15.325 21.5 12 21.5Zm0-16.2L7.75 9.5q-.875.825-1.312 1.862Q6 12.4 6 13.6q0 2.425 1.75 4.162Q9.5 19.5 12 19.5t4.25-1.738Q18 16.025 18 13.6q0-1.2-.438-2.238-.437-1.037-1.312-1.862Z"/>
    </Icon>
  )
});

export default IconMaterialHumidityLowSharp;