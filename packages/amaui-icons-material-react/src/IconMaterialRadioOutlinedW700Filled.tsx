import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRadioOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RadioOutlinedW700Filled'
      short_name='Radio'

      {...props}
    >
      <path d="M6.625 5.85H19.7Q21.025 5.85 21.938 6.762Q22.85 7.675 22.85 9V20.375Q22.85 21.7 21.938 22.612Q21.025 23.525 19.7 23.525H4.3Q2.975 23.525 2.062 22.612Q1.15 21.7 1.15 20.375V9Q1.15 7.825 1.525 6.737Q1.9 5.65 2.95 5.225L15.175 0.225L15.9 2.025ZM4.3 11.85H16V10H18V11.85H19.7V9Q19.7 9 19.7 9Q19.7 9 19.7 9H4.3Q4.3 9 4.3 9Q4.3 9 4.3 9ZM7.7 19.625Q8.75 19.625 9.475 18.9Q10.2 18.175 10.2 17.125Q10.2 16.075 9.475 15.35Q8.75 14.625 7.7 14.625Q6.65 14.625 5.925 15.35Q5.2 16.075 5.2 17.125Q5.2 18.175 5.925 18.9Q6.65 19.625 7.7 19.625Z"/>
    </Icon>
  )
});

export default IconMaterialRadioOutlinedW700Filled;
