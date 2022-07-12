import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShopOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShopOutlined'
      short_name='Shop'

      {...props}
    >
      <path d="M4 21Q3.175 21 2.588 20.413Q2 19.825 2 19V6H8V4Q8 3.175 8.588 2.587Q9.175 2 10 2H14Q14.825 2 15.413 2.587Q16 3.175 16 4V6H22V19Q22 19.825 21.413 20.413Q20.825 21 20 21ZM10 6H14V4Q14 4 14 4Q14 4 14 4H10Q10 4 10 4Q10 4 10 4ZM4 19H20Q20 19 20 19Q20 19 20 19V8H4V19Q4 19 4 19Q4 19 4 19ZM9.5 18 16.5 13.5 9.5 9ZM4 8V19Q4 19 4 19Q4 19 4 19Q4 19 4 19Q4 19 4 19Z"/>
    </Icon>
  )
});

export default IconMaterialShopOutlined;
