import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTableRestaurantOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableRestaurantOutlined'
      short_name='TableRestaurant'

      {...props}
    >
      <path d="M4.325 9H19.675L18.825 6H5.2ZM12 7.5ZM16.8 11H7.225L6.95 13H17.05ZM4 20 5.225 11H3Q2.5 11 2.212 10.6Q1.925 10.2 2.05 9.725L3.475 4.725Q3.575 4.4 3.825 4.2Q4.075 4 4.425 4H19.575Q19.925 4 20.175 4.2Q20.425 4.4 20.525 4.725L21.95 9.725Q22.075 10.2 21.788 10.6Q21.5 11 21 11H18.8L20 20H18L17.325 15H6.675L6 20Z"/>
    </Icon>
  )
});

export default IconMaterialTableRestaurantOutlined;
