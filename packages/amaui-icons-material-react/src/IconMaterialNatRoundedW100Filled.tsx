import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNatRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NatRoundedW100Filled'
      short_name='Nat'

      {...props}
    >
      <path d="M4.375 14.35Q3.4 14.35 2.713 13.662Q2.025 12.975 2.025 12Q2.025 11.025 2.713 10.337Q3.4 9.65 4.375 9.65Q5.25 9.65 5.912 10.212Q6.575 10.775 6.725 11.65H10.525V12.35H6.725Q6.575 13.225 5.912 13.787Q5.25 14.35 4.375 14.35ZM4.375 13.65Q5.05 13.65 5.538 13.162Q6.025 12.675 6.025 12Q6.025 11.325 5.538 10.837Q5.05 10.35 4.375 10.35Q3.7 10.35 3.213 10.837Q2.725 11.325 2.725 12Q2.725 12.675 3.213 13.162Q3.7 13.65 4.375 13.65ZM5.875 20.7Q5.725 20.7 5.625 20.6Q5.525 20.5 5.525 20.35Q5.525 20.2 5.625 20.1Q5.725 20 5.875 20Q9.15 19.875 11.338 17.625Q13.525 15.375 13.525 12Q13.525 8.625 11.338 6.375Q9.15 4.125 5.875 4Q5.725 4 5.625 3.9Q5.525 3.8 5.525 3.65Q5.525 3.5 5.625 3.4Q5.725 3.3 5.875 3.3Q9.475 3.425 11.812 5.862Q14.15 8.3 14.225 11.65H20.625L18.625 9.65Q18.5 9.525 18.5 9.4Q18.5 9.275 18.625 9.15Q18.75 9.025 18.875 9.025Q19 9.025 19.125 9.15L21.45 11.475Q21.575 11.6 21.625 11.725Q21.675 11.85 21.675 12Q21.675 12.15 21.625 12.275Q21.575 12.4 21.45 12.525L19.125 14.85Q19 14.975 18.875 14.975Q18.75 14.975 18.625 14.85Q18.5 14.725 18.5 14.6Q18.5 14.475 18.625 14.35L20.625 12.35H14.225Q14.15 15.7 11.812 18.137Q9.475 20.575 5.875 20.7Z"/>
    </Icon>
  )
});

export default IconMaterialNatRoundedW100Filled;
