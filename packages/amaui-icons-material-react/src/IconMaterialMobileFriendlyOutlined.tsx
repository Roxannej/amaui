import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMobileFriendlyOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileFriendlyOutlined'
      short_name='MobileFriendly'

      {...props}
    >
      <path d="M14.95 16 10.7 11.75 12.1 10.35 14.95 13.2 20.6 7.55 22 8.95ZM6 23Q5.175 23 4.588 22.413Q4 21.825 4 21V3Q4 2.175 4.588 1.587Q5.175 1 6 1H16Q16.825 1 17.413 1.587Q18 2.175 18 3V7H16V6H6V18H16V17H18V21Q18 21.825 17.413 22.413Q16.825 23 16 23ZM6 20V21Q6 21 6 21Q6 21 6 21H16Q16 21 16 21Q16 21 16 21V20ZM6 4H16V3Q16 3 16 3Q16 3 16 3H6Q6 3 6 3Q6 3 6 3ZM6 3Q6 3 6 3Q6 3 6 3V4V3Q6 3 6 3Q6 3 6 3ZM6 21Q6 21 6 21Q6 21 6 21V20V21Q6 21 6 21Q6 21 6 21Z"/>
    </Icon>
  )
});

export default IconMaterialMobileFriendlyOutlined;