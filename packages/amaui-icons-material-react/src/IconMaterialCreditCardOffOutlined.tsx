import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCreditCardOffOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditCardOffOutlined'
      short_name='CreditCardOff'

      {...props}
    >
      <path d="M20.45 23.3 17.15 20H4Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.75 2.05 5.512Q2.1 5.275 2.225 5.075L0.65 3.5L2.075 2.075L21.875 21.875ZM4 18H15.15L9.15 12H4V18Q4 18 4 18Q4 18 4 18ZM4 8H5.15L4.075 6.925L4 6.85Q4 6.85 4 6.85Q4 6.85 4 6.85ZM21.775 18.925 20 17.15V12H14.85L10.85 8H20V6Q20 6 20 6Q20 6 20 6H8.85L6.85 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.25 21.95 18.488Q21.9 18.725 21.775 18.925ZM9.625 12.45Q9.625 12.45 9.625 12.45Q9.625 12.45 9.625 12.45Q9.625 12.45 9.625 12.45Q9.625 12.45 9.625 12.45ZM14.425 11.575Q14.425 11.575 14.425 11.575Q14.425 11.575 14.425 11.575Z"/>
    </Icon>
  )
});

export default IconMaterialCreditCardOffOutlined;
