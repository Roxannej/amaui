import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCreditScoreOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditScoreOutlinedW700Filled'
      short_name='CreditScore'

      {...props}
    >
      <path d="M15.325 22.85 10.7 18.2 12.8 16.125 15.325 18.65 20.675 13.3 22.775 15.4ZM4.3 7.925V11.925H19.7V7.925ZM1.15 6.3Q1.15 4.975 2.062 4.062Q2.975 3.15 4.3 3.15H19.7Q21.025 3.15 21.938 4.062Q22.85 4.975 22.85 6.3V11.925H19.225L15.325 15.825L12.8 13.3L8.45 17.625L8.5 17.7V20.85H4.3Q2.975 20.85 2.062 19.938Q1.15 19.025 1.15 17.7Z"/>
    </Icon>
  )
});

export default IconMaterialCreditScoreOutlinedW700Filled;
