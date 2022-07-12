import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOpenInFullRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInFullRoundedW700Filled'
      short_name='OpenInFull'

      {...props}
    >
      <path d="M4 21.575Q3.35 21.575 2.888 21.112Q2.425 20.65 2.425 20V14Q2.425 13.35 2.888 12.887Q3.35 12.425 4 12.425Q4.65 12.425 5.113 12.887Q5.575 13.35 5.575 14V16.2L16.2 5.575H14Q13.35 5.575 12.888 5.112Q12.425 4.65 12.425 4Q12.425 3.35 12.888 2.887Q13.35 2.425 14 2.425H20Q20.65 2.425 21.113 2.887Q21.575 3.35 21.575 4V10Q21.575 10.65 21.113 11.112Q20.65 11.575 20 11.575Q19.35 11.575 18.888 11.112Q18.425 10.65 18.425 10V7.8L7.8 18.425H10Q10.65 18.425 11.113 18.888Q11.575 19.35 11.575 20Q11.575 20.65 11.113 21.112Q10.65 21.575 10 21.575Z"/>
    </Icon>
  )
});

export default IconMaterialOpenInFullRoundedW700Filled;
