import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShopTwoOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShopTwoOutlined'
      short_name='ShopTwo'

      {...props}
    >
      <path d="M12 15 17.5 11.5 12 8ZM20 22H3Q2.175 22 1.588 21.413Q1 20.825 1 20V9H3V20Q3 20 3 20Q3 20 3 20H20ZM7 18Q6.175 18 5.588 17.413Q5 16.825 5 16V5H10V3Q10 2.175 10.588 1.587Q11.175 1 12 1H16Q16.825 1 17.413 1.587Q18 2.175 18 3V5H23V16Q23 16.825 22.413 17.413Q21.825 18 21 18ZM12 5H16V3Q16 3 16 3Q16 3 16 3H12Q12 3 12 3Q12 3 12 3ZM7 16H21Q21 16 21 16Q21 16 21 16V7H7V16Q7 16 7 16Q7 16 7 16ZM7 7V16Q7 16 7 16Q7 16 7 16Q7 16 7 16Q7 16 7 16Z"/>
    </Icon>
  )
});

export default IconMaterialShopTwoOutlined;
