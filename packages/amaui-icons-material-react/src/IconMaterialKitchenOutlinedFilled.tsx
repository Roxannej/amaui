import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKitchenOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KitchenOutlinedFilled'
      short_name='Kitchen'

      {...props}
    >
      <path d="M4 9.5V4Q4 3.175 4.588 2.587Q5.175 2 6 2H18Q18.825 2 19.413 2.587Q20 3.175 20 4V9.5ZM8 8H10V5H8ZM8 17H10V12H8ZM18 22H6Q5.175 22 4.588 21.413Q4 20.825 4 20V10.5H20V20Q20 20.825 19.413 21.413Q18.825 22 18 22Z"/>
    </Icon>
  )
});

export default IconMaterialKitchenOutlinedFilled;
