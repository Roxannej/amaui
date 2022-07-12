import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoDrinksRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoDrinksRoundedW700'
      short_name='NoDrinks'

      {...props}
    >
      <path d="M7 21.575Q6.35 21.575 5.888 21.112Q5.425 20.65 5.425 20Q5.425 19.35 5.888 18.888Q6.35 18.425 7 18.425H10.425V14.625L3.75 6.7L1.15 4.125Q0.8 3.775 0.8 3.287Q0.8 2.8 1.15 2.45Q1.5 2.1 1.988 2.1Q2.475 2.1 2.825 2.45L21.55 21.175Q21.9 21.525 21.9 22.012Q21.9 22.5 21.55 22.85Q21.2 23.2 20.713 23.2Q20.225 23.2 19.875 22.85L13.575 16.55V18.425H16.75Q17.4 18.425 17.85 18.888Q18.3 19.35 18.3 20Q18.3 20.65 17.837 21.112Q17.375 21.575 16.725 21.575ZM5.9 2.15H19.625Q20.55 2.15 21.2 2.812Q21.85 3.475 21.85 4.4Q21.85 4.825 21.688 5.225Q21.525 5.625 21.25 5.975L15.825 12.075L13.575 9.85L14.35 9H12.7L10.725 7H16.125L17.65 5.3H9.05ZM13.15 9.425Z"/>
    </Icon>
  )
});

export default IconMaterialNoDrinksRoundedW700;