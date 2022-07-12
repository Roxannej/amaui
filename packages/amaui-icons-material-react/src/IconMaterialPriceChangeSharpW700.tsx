import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPriceChangeSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PriceChangeSharpW700'
      short_name='PriceChange'

      {...props}
    >
      <path d="M8 17H10V16H12V11H8V10H12V8H10V7H8V8H6V13H10V14H6V16H8ZM16 16.25 18 14.25H14ZM14 10H18L16 8ZM1.15 20.85V3.15H22.85V20.85ZM4.3 17.7H19.7V6.3H4.3ZM4.3 17.7V6.3V17.7Z"/>
    </Icon>
  )
});

export default IconMaterialPriceChangeSharpW700;
