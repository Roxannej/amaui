import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNorthRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NorthRoundedW700Filled'
      short_name='North'

      {...props}
    >
      <path d="M12 22.575Q11.35 22.575 10.888 22.112Q10.425 21.65 10.425 21V7.175L7.45 10.15Q7 10.6 6.35 10.6Q5.7 10.6 5.25 10.15Q4.8 9.7 4.8 9.05Q4.8 8.4 5.25 7.95L10.9 2.3Q11.15 2.05 11.425 1.95Q11.7 1.85 12 1.85Q12.3 1.85 12.575 1.95Q12.85 2.05 13.1 2.3L18.75 7.95Q19.2 8.4 19.2 9.05Q19.2 9.7 18.75 10.15Q18.3 10.6 17.65 10.6Q17 10.6 16.55 10.15L13.575 7.175V21Q13.575 21.65 13.113 22.112Q12.65 22.575 12 22.575Z"/>
    </Icon>
  )
});

export default IconMaterialNorthRoundedW700Filled;
