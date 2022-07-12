import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialReceiptOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReceiptOutlinedW700'
      short_name='Receipt'

      {...props}
    >
      <path d="M2.15 23.375V0.775L3.85 2.5L5.425 0.775L7.075 2.425L8.725 0.775L10.375 2.425L12 0.775L13.65 2.425L15.3 0.775L16.95 2.425L18.625 0.775L20.275 2.425L21.85 0.775V23.375L20.275 21.725L18.625 23.375L16.95 21.725L15.3 23.375L13.65 21.725L12 23.375L10.35 21.725L8.7 23.375L7.05 21.725L5.375 23.375L3.725 21.725ZM6.3 17.2H17.7V14.8H6.3ZM6.3 13.2H17.7V10.8H6.3ZM6.3 9.2H17.7V6.8H6.3ZM5.3 18.825H18.7V5.175H5.3ZM5.3 5.175V18.825Z"/>
    </Icon>
  )
});

export default IconMaterialReceiptOutlinedW700;