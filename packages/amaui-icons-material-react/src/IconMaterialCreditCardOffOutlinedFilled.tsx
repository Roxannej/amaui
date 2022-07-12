import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCreditCardOffOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditCardOffOutlinedFilled'
      short_name='CreditCardOff'

      {...props}
    >
      <path d="M20.45 23.3 17.15 20H4Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.75 2.05 5.512Q2.1 5.275 2.225 5.075L0.65 3.5L2.075 2.075L21.875 21.875ZM21.775 18.925 14.85 12H20V8H10.85L6.85 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.25 21.95 18.488Q21.9 18.725 21.775 18.925ZM4 12H9.15L5.15 8H4Z"/>
    </Icon>
  )
});

export default IconMaterialCreditCardOffOutlinedFilled;
