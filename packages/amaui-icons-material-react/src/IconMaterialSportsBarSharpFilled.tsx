import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSportsBarSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsBarSharpFilled'
      short_name='SportsBar'

      {...props}
    >
      <path d="M6 21V12.35Q4.7 12 3.85 10.95Q3 9.9 3 8.5Q3 7.175 3.763 6.15Q4.525 5.125 5.725 4.725Q6.3 3.525 7.438 2.775Q8.575 2.025 10 2.025Q10.875 2.025 11.637 2.325Q12.4 2.625 13.025 3.125Q13.275 3.075 13.5 3.037Q13.725 3 14 3Q15.65 3 16.825 4.175Q18 5.35 18 7Q18 7.55 17.863 8.05Q17.725 8.55 17.45 9H21V19H17V21ZM5 8.5Q5 9.325 5.588 9.912Q6.175 10.5 7 10.5Q7.8 10.5 8.363 9.975Q8.925 9.45 9.525 8.8Q10.15 8.125 10.938 7.562Q11.725 7 13 7H16Q16 6.175 15.413 5.588Q14.825 5 14 5Q13.375 5 12.95 5.162Q12.525 5.325 12.525 5.325L11.75 4.675Q11.475 4.45 11.038 4.237Q10.6 4.025 10 4.025Q9.2 4.025 8.538 4.45Q7.875 4.875 7.525 5.6L7.175 6.35L6.375 6.625Q5.75 6.825 5.375 7.337Q5 7.85 5 8.5ZM17 17H19V11H17Z"/>
    </Icon>
  );
});

export default IconMaterialSportsBarSharpFilled;