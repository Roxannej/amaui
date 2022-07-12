import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTableRestaurantOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableRestaurantOutlinedFilled'
      short_name='TableRestaurant'

      {...props}
    >
      <path d="M4.025 20 5.25 11H3.025Q2.525 11 2.238 10.6Q1.95 10.2 2.075 9.725L3.5 4.725Q3.6 4.4 3.85 4.2Q4.1 4 4.45 4H19.6Q19.95 4 20.2 4.2Q20.45 4.4 20.55 4.725L21.975 9.725Q22.1 10.2 21.812 10.6Q21.525 11 21.025 11H18.825L20.025 20H18.025L17.35 15H6.7L6.025 20ZM16.8 11H7.225L6.95 13H17.05Z"/>
    </Icon>
  )
});

export default IconMaterialTableRestaurantOutlinedFilled;