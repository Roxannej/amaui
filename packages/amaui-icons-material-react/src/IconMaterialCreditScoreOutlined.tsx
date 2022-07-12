import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCreditScoreOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditScoreOutlined'
      short_name='CreditScore'

      {...props}
    >
      <path d="M4 8H20V6Q20 6 20 6Q20 6 20 6H4Q4 6 4 6Q4 6 4 6ZM2 6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V12H4V18Q4 18 4 18Q4 18 4 18H8.1V20H4Q3.175 20 2.588 19.413Q2 18.825 2 18ZM14.95 22 10.7 17.75 12.1 16.35 14.95 19.15 20.6 13.5 22 14.95ZM4 6V18Q4 18 4 18Q4 18 4 18V17.75V13.5V16.325V12V8V6Q4 6 4 6Q4 6 4 6Q4 6 4 6Q4 6 4 6Z"/>
    </Icon>
  )
});

export default IconMaterialCreditScoreOutlined;