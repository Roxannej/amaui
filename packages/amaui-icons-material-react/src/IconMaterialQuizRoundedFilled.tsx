import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialQuizRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuizRoundedFilled'
      short_name='Quiz'

      {...props}
    >
      <path d="M14 11.8Q14.275 11.8 14.512 11.587Q14.75 11.375 14.8 11.05Q14.85 10.725 15.038 10.475Q15.225 10.225 15.6 9.85Q16.35 9.1 16.6 8.637Q16.85 8.175 16.85 7.55Q16.85 6.425 16.062 5.713Q15.275 5 14 5Q13.175 5 12.513 5.387Q11.85 5.775 11.45 6.45Q11.3 6.7 11.413 6.975Q11.525 7.25 11.825 7.375Q12.075 7.475 12.35 7.375Q12.625 7.275 12.825 7Q13.05 6.7 13.35 6.55Q13.65 6.4 14 6.4Q14.6 6.4 14.975 6.737Q15.35 7.075 15.35 7.65Q15.35 8 15.15 8.312Q14.95 8.625 14.45 9.1Q13.775 9.675 13.55 10.025Q13.325 10.375 13.275 11.05Q13.25 11.35 13.463 11.575Q13.675 11.8 14 11.8ZM14 15Q14.425 15 14.738 14.688Q15.05 14.375 15.05 13.95Q15.05 13.525 14.738 13.212Q14.425 12.9 14 12.9Q13.575 12.9 13.263 13.212Q12.95 13.525 12.95 13.95Q12.95 14.375 13.263 14.688Q13.575 15 14 15ZM8 18Q7.175 18 6.588 17.413Q6 16.825 6 16V4Q6 3.175 6.588 2.587Q7.175 2 8 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V16Q22 16.825 21.413 17.413Q20.825 18 20 18ZM4 22Q3.175 22 2.588 21.413Q2 20.825 2 20V7Q2 6.575 2.288 6.287Q2.575 6 3 6Q3.425 6 3.713 6.287Q4 6.575 4 7V20Q4 20 4 20Q4 20 4 20H17Q17.425 20 17.712 20.288Q18 20.575 18 21Q18 21.425 17.712 21.712Q17.425 22 17 22Z"/>
    </Icon>
  );
});

export default IconMaterialQuizRoundedFilled;