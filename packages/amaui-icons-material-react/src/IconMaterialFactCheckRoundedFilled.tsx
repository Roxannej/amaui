import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFactCheckRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FactCheckRoundedFilled'
      short_name='FactCheck'

      {...props}
    >
      <path d="M6 9H9Q9.425 9 9.713 8.712Q10 8.425 10 8Q10 7.575 9.713 7.287Q9.425 7 9 7H6Q5.575 7 5.287 7.287Q5 7.575 5 8Q5 8.425 5.287 8.712Q5.575 9 6 9ZM6 13H9Q9.425 13 9.713 12.712Q10 12.425 10 12Q10 11.575 9.713 11.287Q9.425 11 9 11H6Q5.575 11 5.287 11.287Q5 11.575 5 12Q5 12.425 5.287 12.712Q5.575 13 6 13ZM6 17H9Q9.425 17 9.713 16.712Q10 16.425 10 16Q10 15.575 9.713 15.287Q9.425 15 9 15H6Q5.575 15 5.287 15.287Q5 15.575 5 16Q5 16.425 5.287 16.712Q5.575 17 6 17ZM14.55 14.575Q14.75 14.575 14.925 14.512Q15.1 14.45 15.25 14.3L18.8 10.75Q19.125 10.425 19.113 10.037Q19.1 9.65 18.8 9.35Q18.5 9.05 18.087 9.05Q17.675 9.05 17.375 9.35L14.55 12.175L13.825 11.45Q13.525 11.15 13.125 11.162Q12.725 11.175 12.425 11.475Q12.15 11.775 12.137 12.175Q12.125 12.575 12.425 12.875L13.85 14.3Q14 14.45 14.175 14.512Q14.35 14.575 14.55 14.575ZM4 21Q3.175 21 2.588 20.413Q2 19.825 2 19V5Q2 4.175 2.588 3.587Q3.175 3 4 3H20Q20.825 3 21.413 3.587Q22 4.175 22 5V19Q22 19.825 21.413 20.413Q20.825 21 20 21Z"/>
    </Icon>
  )
});

export default IconMaterialFactCheckRoundedFilled;
