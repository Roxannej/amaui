import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKitchenOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KitchenOutlinedW100'
      short_name='Kitchen'

      {...props}
    >
      <path d="M8.25 8V5.5H8.95V8ZM8.25 15.85V11.7H8.95V15.85ZM6.8 20.7Q6.175 20.7 5.738 20.262Q5.3 19.825 5.3 19.2V4.8Q5.3 4.175 5.738 3.737Q6.175 3.3 6.8 3.3H17.2Q17.825 3.3 18.262 3.737Q18.7 4.175 18.7 4.8V19.2Q18.7 19.825 18.262 20.262Q17.825 20.7 17.2 20.7ZM6.8 20H17.2Q17.55 20 17.775 19.775Q18 19.55 18 19.2V10.2H6V19.2Q6 19.55 6.225 19.775Q6.45 20 6.8 20ZM6 9.5H18V4.8Q18 4.45 17.775 4.225Q17.55 4 17.2 4H6.8Q6.45 4 6.225 4.225Q6 4.45 6 4.8Z"/>
    </Icon>
  )
});

export default IconMaterialKitchenOutlinedW100;
