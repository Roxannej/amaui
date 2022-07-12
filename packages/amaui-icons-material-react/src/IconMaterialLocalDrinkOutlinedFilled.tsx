import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocalDrinkOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalDrinkOutlinedFilled'
      short_name='LocalDrink'

      {...props}
    >
      <path d="M7 22Q6.2 22 5.638 21.5Q5.075 21 5 20.25L3 2H21L19 20.25Q18.925 21 18.363 21.5Q17.8 22 17 22ZM5.65 8H18.35L18.75 4H5.25ZM12 19Q13.2 19 14.1 18.175Q15 17.35 15 16.15Q15 15.125 14.262 13.925Q13.525 12.725 12 11Q10.475 12.725 9.738 13.925Q9 15.125 9 16.15Q9 17.35 9.9 18.175Q10.8 19 12 19Z"/>
    </Icon>
  )
});

export default IconMaterialLocalDrinkOutlinedFilled;
