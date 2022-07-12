import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRemoveShoppingCartOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveShoppingCartOutlined'
      short_name='RemoveShoppingCart'

      {...props}
    >
      <path d="M15.825 13 13.825 11H15.55L18.3 6Q18.3 6 18.3 6Q18.3 6 18.3 6H8.825L6.825 4H19.95Q20.525 4 20.838 4.487Q21.15 4.975 20.85 5.55L17.3 11.95Q17.025 12.45 16.588 12.725Q16.15 13 15.825 13ZM7 22Q6.175 22 5.588 21.413Q5 20.825 5 20Q5 19.175 5.588 18.587Q6.175 18 7 18Q7.825 18 8.412 18.587Q9 19.175 9 20Q9 20.825 8.412 21.413Q7.825 22 7 22ZM20.5 23.3 14.15 17H7.6Q6.5 17 5.925 16.062Q5.35 15.125 5.85 14.1L6.9 11.95L5.1 7.9L0.7 3.5L2.1 2.1L21.9 21.9ZM12.15 15 10.15 13H8.6L7.6 15Q7.6 15 7.6 15Q7.6 15 7.6 15ZM15.55 11H13.825H15.55Q15.55 11 15.55 11Q15.55 11 15.55 11ZM17 22Q16.175 22 15.588 21.413Q15 20.825 15 20Q15 19.175 15.588 18.587Q16.175 18 17 18Q17.825 18 18.413 18.587Q19 19.175 19 20Q19 20.825 18.413 21.413Q17.825 22 17 22Z"/>
    </Icon>
  )
});

export default IconMaterialRemoveShoppingCartOutlined;
