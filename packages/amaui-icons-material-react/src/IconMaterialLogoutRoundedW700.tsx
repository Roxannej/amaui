import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLogoutRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LogoutRoundedW700'
      short_name='Logout'

      {...props}
    >
      <path d="M14.925 17.075Q14.475 16.6 14.475 15.963Q14.475 15.325 14.925 14.875L16.225 13.575H10.125Q9.475 13.575 9.012 13.112Q8.55 12.65 8.55 12Q8.55 11.35 9.012 10.887Q9.475 10.425 10.125 10.425H16.225L14.9 9.1Q14.45 8.65 14.463 8.012Q14.475 7.375 14.925 6.925Q15.375 6.475 16.025 6.475Q16.675 6.475 17.125 6.925L21.1 10.9Q21.325 11.125 21.438 11.412Q21.55 11.7 21.55 12Q21.55 12.3 21.438 12.587Q21.325 12.875 21.1 13.1L17.1 17.1Q16.625 17.575 16 17.55Q15.375 17.525 14.925 17.075ZM4.95 21.85Q3.625 21.85 2.712 20.938Q1.8 20.025 1.8 18.7V5.3Q1.8 3.975 2.712 3.062Q3.625 2.15 4.95 2.15H10.625Q11.275 2.15 11.738 2.612Q12.2 3.075 12.2 3.725Q12.2 4.375 11.738 4.838Q11.275 5.3 10.625 5.3H4.95Q4.95 5.3 4.95 5.3Q4.95 5.3 4.95 5.3V18.7Q4.95 18.7 4.95 18.7Q4.95 18.7 4.95 18.7H10.625Q11.275 18.7 11.738 19.163Q12.2 19.625 12.2 20.275Q12.2 20.925 11.738 21.388Q11.275 21.85 10.625 21.85Z"/>
    </Icon>
  )
});

export default IconMaterialLogoutRoundedW700;
