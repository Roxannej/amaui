import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMobileOffOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileOffOutlined'
      short_name='MobileOff'

      {...props}
    >
      <path d="M20.5 23.3 0.7 3.5 2.1 2.1 21.9 21.9ZM5 6.425 7 8.425V18H16.6L19 20.4V21Q19 21.825 18.413 22.413Q17.825 23 17 23H7Q6.175 23 5.588 22.413Q5 21.825 5 21ZM7 20V21Q7 21 7 21Q7 21 7 21H17Q17 21 17 21Q17 21 17 21V20ZM19 3V16.15L17 14.15V6H8.825L5.15 2.3Q5.4 1.725 5.888 1.362Q6.375 1 7 1H17Q17.825 1 18.413 1.587Q19 2.175 19 3ZM7 4H17V3Q17 3 17 3Q17 3 17 3H7Q7 3 7 3Q7 3 7 3ZM7 20V21Q7 21 7 21Q7 21 7 21Q7 21 7 21Q7 21 7 21V20ZM7 4V3Q7 3 7 3Q7 3 7 3Q7 3 7 3Q7 3 7 3Z"/>
    </Icon>
  )
});

export default IconMaterialMobileOffOutlined;
