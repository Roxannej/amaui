import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial8kRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='8kRoundedFilled'
      short_name='8k'

      {...props}
    >
      <path d="M13.75 15Q14.075 15 14.288 14.787Q14.5 14.575 14.5 14.25V12.75L16.025 14.7Q16.125 14.825 16.263 14.912Q16.4 15 16.575 15Q17.05 15 17.238 14.575Q17.425 14.15 17.15 13.8L15.75 12L17.2 10.15Q17.475 9.8 17.263 9.4Q17.05 9 16.625 9Q16.45 9 16.3 9.075Q16.15 9.15 16.025 9.3L14.5 11.25V9.725Q14.5 9.425 14.288 9.212Q14.075 9 13.75 9Q13.425 9 13.213 9.212Q13 9.425 13 9.75V14.275Q13 14.575 13.213 14.787Q13.425 15 13.75 15ZM7.5 15H10Q10.425 15 10.713 14.712Q11 14.425 11 14V10Q11 9.575 10.713 9.287Q10.425 9 10 9H7.5Q7.075 9 6.787 9.287Q6.5 9.575 6.5 10V14Q6.5 14.425 6.787 14.712Q7.075 15 7.5 15ZM8 11.5V10H9.5V11.5ZM8 14V12.5H9.5V14ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21Z"/>
    </Icon>
  )
});

export default IconMaterial8kRoundedFilled;
