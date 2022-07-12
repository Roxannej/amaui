import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddShoppingCartOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddShoppingCartOutlinedFilled'
      short_name='AddShoppingCart'

      {...props}
    >
      <path d="M11 9V6H8V4H11V1H13V4H16V6H13V9ZM7 22Q6.175 22 5.588 21.413Q5 20.825 5 20Q5 19.175 5.588 18.587Q6.175 18 7 18Q7.825 18 8.412 18.587Q9 19.175 9 20Q9 20.825 8.412 21.413Q7.825 22 7 22ZM17 22Q16.175 22 15.588 21.413Q15 20.825 15 20Q15 19.175 15.588 18.587Q16.175 18 17 18Q17.825 18 18.413 18.587Q19 19.175 19 20Q19 20.825 18.413 21.413Q17.825 22 17 22ZM7 17Q5.875 17 5.275 16.012Q4.675 15.025 5.25 14.05L6.6 11.6L3 4H1V2H4.275L8.525 11H15.55L19.425 4L21.175 4.95L17.3 11.95Q17.025 12.45 16.575 12.725Q16.125 13 15.55 13H8.1L7 15Q7 15 7 15Q7 15 7 15H19V17Z"/>
    </Icon>
  )
});

export default IconMaterialAddShoppingCartOutlinedFilled;