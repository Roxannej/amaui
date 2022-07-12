import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKitchenOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KitchenOutlinedW100Filled'
      short_name='Kitchen'

      {...props}
    >
      <path d="M5.3 9.5V4.8Q5.3 4.175 5.738 3.737Q6.175 3.3 6.8 3.3H17.2Q17.825 3.3 18.262 3.737Q18.7 4.175 18.7 4.8V9.5ZM8.25 8H8.95V5.5H8.25ZM8.25 15.85H8.95V11.7H8.25ZM17.2 20.7H6.8Q6.175 20.7 5.738 20.262Q5.3 19.825 5.3 19.2V10.2H18.7V19.2Q18.7 19.825 18.262 20.262Q17.825 20.7 17.2 20.7Z"/>
    </Icon>
  )
});

export default IconMaterialKitchenOutlinedW100Filled;
