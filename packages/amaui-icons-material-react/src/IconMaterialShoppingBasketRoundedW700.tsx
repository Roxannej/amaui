import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShoppingBasketRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShoppingBasketRoundedW700'
      short_name='ShoppingBasket'

      {...props}
    >
      <path d="M5.3 21.85Q4.6 21.85 4.062 21.425Q3.525 21 3.325 20.325L0.325 9.675Q0.15 9.1 0.525 8.625Q0.9 8.15 1.5 8.15H6.45L10.45 2Q10.7 1.6 11.113 1.375Q11.525 1.15 11.975 1.15Q12.425 1.15 12.838 1.375Q13.25 1.6 13.5 2L17.5 8.15H22.5Q23.1 8.15 23.463 8.625Q23.825 9.1 23.675 9.675L20.75 20.325Q20.55 20.975 20.013 21.413Q19.475 21.85 18.8 21.85ZM10.125 8.15H13.85L11.95 5.45ZM6.075 18.7H17.925H6.075ZM12 17.2Q12.925 17.2 13.562 16.562Q14.2 15.925 14.2 15Q14.2 14.075 13.562 13.438Q12.925 12.8 12 12.8Q11.075 12.8 10.438 13.438Q9.8 14.075 9.8 15Q9.8 15.925 10.438 16.562Q11.075 17.2 12 17.2ZM6.075 18.7H17.925L19.975 11.3H4.025Z"/>
    </Icon>
  )
});

export default IconMaterialShoppingBasketRoundedW700;
