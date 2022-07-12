import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLoginRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LoginRoundedW700'
      short_name='Login'

      {...props}
    >
      <path d="M8.15 17.075Q7.7 16.6 7.7 15.963Q7.7 15.325 8.15 14.875L9.45 13.575H3.375Q2.725 13.575 2.263 13.112Q1.8 12.65 1.8 12Q1.8 11.35 2.263 10.887Q2.725 10.425 3.375 10.425H9.45L8.125 9.1Q7.675 8.65 7.688 8.012Q7.7 7.375 8.15 6.925Q8.6 6.475 9.25 6.475Q9.9 6.475 10.35 6.925L14.35 10.9Q14.575 11.125 14.675 11.412Q14.775 11.7 14.775 12Q14.775 12.3 14.675 12.587Q14.575 12.875 14.35 13.1L10.325 17.1Q9.875 17.55 9.238 17.538Q8.6 17.525 8.15 17.075ZM13.375 21.85Q12.725 21.85 12.263 21.388Q11.8 20.925 11.8 20.275Q11.8 19.625 12.263 19.163Q12.725 18.7 13.375 18.7H19.05Q19.05 18.7 19.05 18.7Q19.05 18.7 19.05 18.7V5.3Q19.05 5.3 19.05 5.3Q19.05 5.3 19.05 5.3H13.375Q12.725 5.3 12.263 4.838Q11.8 4.375 11.8 3.725Q11.8 3.075 12.263 2.612Q12.725 2.15 13.375 2.15H19.05Q20.375 2.15 21.288 3.062Q22.2 3.975 22.2 5.3V18.7Q22.2 20.025 21.288 20.938Q20.375 21.85 19.05 21.85Z"/>
    </Icon>
  )
});

export default IconMaterialLoginRoundedW700;