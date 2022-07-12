import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRadioRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RadioRoundedW700Filled'
      short_name='Radio'

      {...props}
    >
      <path d="M4.3 23.525Q3 23.525 2.075 22.6Q1.15 21.675 1.15 20.375V9Q1.15 7.825 1.525 6.737Q1.9 5.65 2.95 5.225L14.275 0.6Q14.65 0.45 15.012 0.6Q15.375 0.75 15.525 1.125Q15.675 1.5 15.525 1.875Q15.375 2.25 15 2.4L6.625 5.85H19.7Q21 5.85 21.925 6.775Q22.85 7.7 22.85 9V20.375Q22.85 21.675 21.925 22.6Q21 23.525 19.7 23.525ZM4.3 11.85H16V11Q16 10.575 16.288 10.287Q16.575 10 17 10Q17.425 10 17.712 10.287Q18 10.575 18 11V11.85H19.7V9Q19.7 9 19.7 9Q19.7 9 19.7 9H4.3Q4.3 9 4.3 9Q4.3 9 4.3 9ZM7.7 19.625Q8.75 19.625 9.475 18.9Q10.2 18.175 10.2 17.125Q10.2 16.075 9.475 15.35Q8.75 14.625 7.7 14.625Q6.65 14.625 5.925 15.35Q5.2 16.075 5.2 17.125Q5.2 18.175 5.925 18.9Q6.65 19.625 7.7 19.625Z"/>
    </Icon>
  )
});

export default IconMaterialRadioRoundedW700Filled;
