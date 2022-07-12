import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCreditScoreSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditScoreSharpW700'
      short_name='CreditScore'

      {...props}
    >
      <path d="M4.3 7.925H19.7V6.3H4.3ZM1.15 20.85V3.15H22.85V11.925H4.3V17.7H8.5V20.85ZM15.325 22.85 10.7 18.2 12.8 16.125 15.325 18.65 20.675 13.3 22.775 15.4ZM4.3 6.3V17.7V17.625V13.3V15.825V11.925V7.925V6.3Z"/>
    </Icon>
  )
});

export default IconMaterialCreditScoreSharpW700;
