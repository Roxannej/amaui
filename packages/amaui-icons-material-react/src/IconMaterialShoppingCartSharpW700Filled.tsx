import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShoppingCartSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShoppingCartSharpW700Filled'
      short_name='ShoppingCart'

      {...props}
    >
      <path d="M7 22.375Q6.175 22.375 5.588 21.788Q5 21.2 5 20.375Q5 19.55 5.588 18.962Q6.175 18.375 7 18.375Q7.825 18.375 8.412 18.962Q9 19.55 9 20.375Q9 21.2 8.412 21.788Q7.825 22.375 7 22.375ZM17 22.375Q16.175 22.375 15.588 21.788Q15 21.2 15 20.375Q15 19.55 15.588 18.962Q16.175 18.375 17 18.375Q17.825 18.375 18.413 18.962Q19 19.55 19 20.375Q19 21.2 18.413 21.788Q17.825 22.375 17 22.375ZM2.925 17.375 6.175 11.6 2.775 4.375H0.625V1.625H4.475L5.425 3.625H22.275L17.175 13H8.525L7.65 14.625H19.375V17.375Z"/>
    </Icon>
  )
});

export default IconMaterialShoppingCartSharpW700Filled;