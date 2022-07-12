import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhonelinkEraseOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhonelinkEraseOutlined'
      short_name='PhonelinkErase'

      {...props}
    >
      <path d="M6 23Q5.175 23 4.588 22.413Q4 21.825 4 21V3Q4 2.175 4.588 1.587Q5.175 1 6 1H16Q16.825 1 17.413 1.587Q18 2.175 18 3V7H16V6H6V18H16V17H18V21Q18 21.825 17.413 22.413Q16.825 23 16 23ZM6 20V21Q6 21 6 21Q6 21 6 21H16Q16 21 16 21Q16 21 16 21V20ZM6 4H16V3Q16 3 16 3Q16 3 16 3H6Q6 3 6 3Q6 3 6 3ZM6 3Q6 3 6 3Q6 3 6 3V4V3Q6 3 6 3Q6 3 6 3ZM6 21Q6 21 6 21Q6 21 6 21V20V21Q6 21 6 21Q6 21 6 21ZM14.4 16 13 14.6 15.6 12 13 9.4 14.4 8 17 10.6 19.6 8 21 9.4 18.4 12 21 14.6 19.6 16 17 13.4Z"/>
    </Icon>
  )
});

export default IconMaterialPhonelinkEraseOutlined;