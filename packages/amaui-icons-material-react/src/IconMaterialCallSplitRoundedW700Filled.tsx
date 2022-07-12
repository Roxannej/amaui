import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCallSplitRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallSplitRoundedW700Filled'
      short_name='CallSplit'

      {...props}
    >
      <path d="M15.65 10.625 13.4 8.375 15.175 6.575H14.8Q14.3 6.575 13.863 6.112Q13.425 5.65 13.425 5Q13.425 4.35 13.888 3.887Q14.35 3.425 15 3.425H19Q19.65 3.425 20.113 3.887Q20.575 4.35 20.575 5V9Q20.575 9.65 20.113 10.112Q19.65 10.575 19 10.575Q18.35 10.575 17.888 10.137Q17.425 9.7 17.425 9.2V8.825ZM12 20.575Q11.35 20.575 10.888 20.112Q10.425 19.65 10.425 19V12.625L6.575 8.775V9.15Q6.575 9.7 6.113 10.137Q5.65 10.575 5 10.575Q4.35 10.575 3.888 10.112Q3.425 9.65 3.425 9V5Q3.425 4.35 3.888 3.887Q4.35 3.425 5 3.425H9Q9.65 3.425 10.113 3.887Q10.575 4.35 10.575 5Q10.575 5.65 10.138 6.112Q9.7 6.575 9.15 6.575H8.775L13.575 11.375V19Q13.575 19.65 13.113 20.112Q12.65 20.575 12 20.575Z"/>
    </Icon>
  )
});

export default IconMaterialCallSplitRoundedW700Filled;
