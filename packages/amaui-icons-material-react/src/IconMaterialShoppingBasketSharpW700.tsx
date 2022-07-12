import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShoppingBasketSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShoppingBasketSharpW700'
      short_name='ShoppingBasket'

      {...props}
    >
      <path d="M3.75 21.85 -0.1 8.15H6.45L10.45 2Q10.7 1.6 11.113 1.375Q11.525 1.15 11.975 1.15Q12.425 1.15 12.838 1.375Q13.25 1.6 13.5 2L17.5 8.15H24.1L20.325 21.85ZM10.125 8.15H13.85L11.95 5.45ZM6.075 18.7H17.925H6.075ZM12 17.2Q12.925 17.2 13.562 16.562Q14.2 15.925 14.2 15Q14.2 14.075 13.562 13.438Q12.925 12.8 12 12.8Q11.075 12.8 10.438 13.438Q9.8 14.075 9.8 15Q9.8 15.925 10.438 16.562Q11.075 17.2 12 17.2ZM6.075 18.7H17.925L19.975 11.3H4.025Z"/>
    </Icon>
  )
});

export default IconMaterialShoppingBasketSharpW700;
