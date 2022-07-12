import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoDrinksOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoDrinksOutlinedW700'
      short_name='NoDrinks'

      {...props}
    >
      <path d="M2 1.6 22.4 22 20.725 23.675 13.575 16.55V18.425H18.3V21.575H5.425V18.425H10.425V14.625L3.75 6.7L0.325 3.275ZM5.9 2.15H21.85V5.3L15.825 12.075L13.575 9.85L14.35 9H12.7L10.725 7H16.125L17.65 5.3H9.05ZM13.15 9.425Z"/>
    </Icon>
  )
});

export default IconMaterialNoDrinksOutlinedW700;