import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddToHomeScreenOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddToHomeScreenOutlinedFilled'
      short_name='AddToHomeScreen'

      {...props}
    >
      <path d="M4.4 17 3 15.6 8.6 10H5V8H12V15H10V11.4ZM8 23Q7.175 23 6.588 22.413Q6 21.825 6 21V17H8V18H18V6H8V7H6V3Q6 2.175 6.588 1.587Q7.175 1 8 1H18Q18.825 1 19.413 1.587Q20 2.175 20 3V21Q20 21.825 19.413 22.413Q18.825 23 18 23Z"/>
    </Icon>
  )
});

export default IconMaterialAddToHomeScreenOutlinedFilled;
