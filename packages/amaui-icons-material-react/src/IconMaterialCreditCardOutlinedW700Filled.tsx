import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCreditCardOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditCardOutlinedW700Filled'
      short_name='CreditCard'

      {...props}
    >
      <path d="M4.3 20.85Q2.975 20.85 2.062 19.938Q1.15 19.025 1.15 17.7V6.3Q1.15 4.975 2.062 4.062Q2.975 3.15 4.3 3.15H19.7Q21.025 3.15 21.938 4.062Q22.85 4.975 22.85 6.3V17.7Q22.85 19.025 21.938 19.938Q21.025 20.85 19.7 20.85ZM4.3 7.925V11.925H19.7V7.925Z"/>
    </Icon>
  )
});

export default IconMaterialCreditCardOutlinedW700Filled;
