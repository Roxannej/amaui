import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial3pRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='3pRoundedW100Filled'
      short_name='3p'

      {...props}
    >
      <path d="M8.9 12.85H15.1V12.8Q15.1 12.1 14.213 11.625Q13.325 11.15 12 11.15Q10.675 11.15 9.788 11.625Q8.9 12.1 8.9 12.8ZM12 9.35Q12.575 9.35 12.963 8.962Q13.35 8.575 13.35 8Q13.35 7.425 12.963 7.037Q12.575 6.65 12 6.65Q11.425 6.65 11.038 7.037Q10.65 7.425 10.65 8Q10.65 8.575 11.038 8.962Q11.425 9.35 12 9.35ZM3.3 17.7V4.8Q3.3 4.15 3.725 3.725Q4.15 3.3 4.8 3.3H19.2Q19.85 3.3 20.275 3.725Q20.7 4.15 20.7 4.8V15.2Q20.7 15.85 20.275 16.275Q19.85 16.7 19.2 16.7H6.1L4.575 18.225Q4.225 18.575 3.763 18.387Q3.3 18.2 3.3 17.7Z"/>
    </Icon>
  )
});

export default IconMaterial3pRoundedW100Filled;
