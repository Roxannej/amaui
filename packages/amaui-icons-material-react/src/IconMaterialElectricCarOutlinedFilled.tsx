import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialElectricCarOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElectricCarOutlinedFilled'
      short_name='ElectricCar'

      {...props}
    >
      <path d="M6 15V16Q6 16.425 5.713 16.712Q5.425 17 5 17H4Q3.575 17 3.288 16.712Q3 16.425 3 16V8L5.1 2Q5.25 1.55 5.638 1.275Q6.025 1 6.5 1H17.5Q17.975 1 18.363 1.275Q18.75 1.55 18.9 2L21 8V16Q21 16.425 20.712 16.712Q20.425 17 20 17H19Q18.575 17 18.288 16.712Q18 16.425 18 16V15ZM5.8 6H18.2L17.15 3H6.85ZM7.5 12Q8.125 12 8.562 11.562Q9 11.125 9 10.5Q9 9.875 8.562 9.438Q8.125 9 7.5 9Q6.875 9 6.438 9.438Q6 9.875 6 10.5Q6 11.125 6.438 11.562Q6.875 12 7.5 12ZM16.5 12Q17.125 12 17.562 11.562Q18 11.125 18 10.5Q18 9.875 17.562 9.438Q17.125 9 16.5 9Q15.875 9 15.438 9.438Q15 9.875 15 10.5Q15 11.125 15.438 11.562Q15.875 12 16.5 12ZM13 23 7 20H11V18L17 21H13Z"/>
    </Icon>
  )
});

export default IconMaterialElectricCarOutlinedFilled;
