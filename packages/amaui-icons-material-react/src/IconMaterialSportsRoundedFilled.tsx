import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSportsRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsRoundedFilled'
      short_name='Sports'

      {...props}
    >
      <path d="M11 19Q8.5 19 6.75 17.25Q5 15.5 5 13Q5 12.725 5.025 12.45Q5.05 12.175 5.1 11.9Q4.95 11.95 4.8 11.975Q4.65 12 4.5 12Q3.45 12 2.725 11.275Q2 10.55 2 9.5Q2 8.45 2.688 7.725Q3.375 7 4.425 7Q5.25 7 5.912 7.463Q6.575 7.925 6.85 8.65Q7.675 7.9 8.738 7.45Q9.8 7 11 7H21Q21.425 7 21.712 7.287Q22 7.575 22 8V10Q22 10.425 21.712 10.712Q21.425 11 21 11H17V13Q17 15.5 15.25 17.25Q13.5 19 11 19ZM4.5 10.5Q4.925 10.5 5.213 10.212Q5.5 9.925 5.5 9.5Q5.5 9.075 5.213 8.787Q4.925 8.5 4.5 8.5Q4.075 8.5 3.788 8.787Q3.5 9.075 3.5 9.5Q3.5 9.925 3.788 10.212Q4.075 10.5 4.5 10.5ZM11 15Q11.825 15 12.413 14.412Q13 13.825 13 13Q13 12.175 12.413 11.587Q11.825 11 11 11Q10.175 11 9.588 11.587Q9 12.175 9 13Q9 13.825 9.588 14.412Q10.175 15 11 15Z"/>
    </Icon>
  );
});

export default IconMaterialSportsRoundedFilled;