import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShoppingCartOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShoppingCartOutlinedFilled'
      short_name='ShoppingCart'

      {...props}
    >
      <path d="M7 22Q6.175 22 5.588 21.413Q5 20.825 5 20Q5 19.175 5.588 18.587Q6.175 18 7 18Q7.825 18 8.412 18.587Q9 19.175 9 20Q9 20.825 8.412 21.413Q7.825 22 7 22ZM17 22Q16.175 22 15.588 21.413Q15 20.825 15 20Q15 19.175 15.588 18.587Q16.175 18 17 18Q17.825 18 18.413 18.587Q19 19.175 19 20Q19 20.825 18.413 21.413Q17.825 22 17 22ZM6.15 6 8.55 11H15.55Q15.55 11 15.55 11Q15.55 11 15.55 11L18.3 6Q18.3 6 18.3 6Q18.3 6 18.3 6ZM5.2 4H19.95Q20.625 4 20.875 4.5Q21.125 5 20.85 5.55L17.3 11.95Q17.025 12.45 16.575 12.725Q16.125 13 15.55 13H8.1L7 15Q7 15 7 15Q7 15 7 15H19V17H7Q5.875 17 5.3 16.012Q4.725 15.025 5.25 14.05L6.6 11.6L3 4H1V2H4.25ZM8.55 11 6.15 6H18.3Q18.3 6 18.3 6Q18.3 6 18.3 6L15.55 11Z"/>
    </Icon>
  )
});

export default IconMaterialShoppingCartOutlinedFilled;
