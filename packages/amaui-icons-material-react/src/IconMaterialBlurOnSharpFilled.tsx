import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBlurOnSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BlurOnSharpFilled'
      short_name='BlurOn'

      {...props}
    >
      <path d="M6 15Q5.575 15 5.287 14.712Q5 14.425 5 14Q5 13.575 5.287 13.287Q5.575 13 6 13Q6.425 13 6.713 13.287Q7 13.575 7 14Q7 14.425 6.713 14.712Q6.425 15 6 15ZM6 19Q5.575 19 5.287 18.712Q5 18.425 5 18Q5 17.575 5.287 17.288Q5.575 17 6 17Q6.425 17 6.713 17.288Q7 17.575 7 18Q7 18.425 6.713 18.712Q6.425 19 6 19ZM6 11Q5.575 11 5.287 10.712Q5 10.425 5 10Q5 9.575 5.287 9.287Q5.575 9 6 9Q6.425 9 6.713 9.287Q7 9.575 7 10Q7 10.425 6.713 10.712Q6.425 11 6 11ZM3 10.5Q2.8 10.5 2.65 10.35Q2.5 10.2 2.5 10Q2.5 9.8 2.65 9.65Q2.8 9.5 3 9.5Q3.2 9.5 3.35 9.65Q3.5 9.8 3.5 10Q3.5 10.2 3.35 10.35Q3.2 10.5 3 10.5ZM6 7Q5.575 7 5.287 6.713Q5 6.425 5 6Q5 5.575 5.287 5.287Q5.575 5 6 5Q6.425 5 6.713 5.287Q7 5.575 7 6Q7 6.425 6.713 6.713Q6.425 7 6 7ZM21 10.5Q20.8 10.5 20.65 10.35Q20.5 10.2 20.5 10Q20.5 9.8 20.65 9.65Q20.8 9.5 21 9.5Q21.2 9.5 21.35 9.65Q21.5 9.8 21.5 10Q21.5 10.2 21.35 10.35Q21.2 10.5 21 10.5ZM14 7Q13.575 7 13.288 6.713Q13 6.425 13 6Q13 5.575 13.288 5.287Q13.575 5 14 5Q14.425 5 14.713 5.287Q15 5.575 15 6Q15 6.425 14.713 6.713Q14.425 7 14 7ZM14 3.5Q13.8 3.5 13.65 3.35Q13.5 3.2 13.5 3Q13.5 2.8 13.65 2.65Q13.8 2.5 14 2.5Q14.2 2.5 14.35 2.65Q14.5 2.8 14.5 3Q14.5 3.2 14.35 3.35Q14.2 3.5 14 3.5ZM3 14.5Q2.8 14.5 2.65 14.35Q2.5 14.2 2.5 14Q2.5 13.8 2.65 13.65Q2.8 13.5 3 13.5Q3.2 13.5 3.35 13.65Q3.5 13.8 3.5 14Q3.5 14.2 3.35 14.35Q3.2 14.5 3 14.5ZM10 21.5Q9.8 21.5 9.65 21.35Q9.5 21.2 9.5 21Q9.5 20.8 9.65 20.65Q9.8 20.5 10 20.5Q10.2 20.5 10.35 20.65Q10.5 20.8 10.5 21Q10.5 21.2 10.35 21.35Q10.2 21.5 10 21.5ZM10 3.5Q9.8 3.5 9.65 3.35Q9.5 3.2 9.5 3Q9.5 2.8 9.65 2.65Q9.8 2.5 10 2.5Q10.2 2.5 10.35 2.65Q10.5 2.8 10.5 3Q10.5 3.2 10.35 3.35Q10.2 3.5 10 3.5ZM10 7Q9.575 7 9.288 6.713Q9 6.425 9 6Q9 5.575 9.288 5.287Q9.575 5 10 5Q10.425 5 10.713 5.287Q11 5.575 11 6Q11 6.425 10.713 6.713Q10.425 7 10 7ZM10 15.5Q9.375 15.5 8.938 15.062Q8.5 14.625 8.5 14Q8.5 13.375 8.938 12.938Q9.375 12.5 10 12.5Q10.625 12.5 11.062 12.938Q11.5 13.375 11.5 14Q11.5 14.625 11.062 15.062Q10.625 15.5 10 15.5ZM18 15Q17.575 15 17.288 14.712Q17 14.425 17 14Q17 13.575 17.288 13.287Q17.575 13 18 13Q18.425 13 18.712 13.287Q19 13.575 19 14Q19 14.425 18.712 14.712Q18.425 15 18 15ZM18 19Q17.575 19 17.288 18.712Q17 18.425 17 18Q17 17.575 17.288 17.288Q17.575 17 18 17Q18.425 17 18.712 17.288Q19 17.575 19 18Q19 18.425 18.712 18.712Q18.425 19 18 19ZM18 11Q17.575 11 17.288 10.712Q17 10.425 17 10Q17 9.575 17.288 9.287Q17.575 9 18 9Q18.425 9 18.712 9.287Q19 9.575 19 10Q19 10.425 18.712 10.712Q18.425 11 18 11ZM18 7Q17.575 7 17.288 6.713Q17 6.425 17 6Q17 5.575 17.288 5.287Q17.575 5 18 5Q18.425 5 18.712 5.287Q19 5.575 19 6Q19 6.425 18.712 6.713Q18.425 7 18 7ZM21 14.5Q20.8 14.5 20.65 14.35Q20.5 14.2 20.5 14Q20.5 13.8 20.65 13.65Q20.8 13.5 21 13.5Q21.2 13.5 21.35 13.65Q21.5 13.8 21.5 14Q21.5 14.2 21.35 14.35Q21.2 14.5 21 14.5ZM14 19Q13.575 19 13.288 18.712Q13 18.425 13 18Q13 17.575 13.288 17.288Q13.575 17 14 17Q14.425 17 14.713 17.288Q15 17.575 15 18Q15 18.425 14.713 18.712Q14.425 19 14 19ZM14 21.5Q13.8 21.5 13.65 21.35Q13.5 21.2 13.5 21Q13.5 20.8 13.65 20.65Q13.8 20.5 14 20.5Q14.2 20.5 14.35 20.65Q14.5 20.8 14.5 21Q14.5 21.2 14.35 21.35Q14.2 21.5 14 21.5ZM10 11.5Q9.375 11.5 8.938 11.062Q8.5 10.625 8.5 10Q8.5 9.375 8.938 8.938Q9.375 8.5 10 8.5Q10.625 8.5 11.062 8.938Q11.5 9.375 11.5 10Q11.5 10.625 11.062 11.062Q10.625 11.5 10 11.5ZM10 19Q9.575 19 9.288 18.712Q9 18.425 9 18Q9 17.575 9.288 17.288Q9.575 17 10 17Q10.425 17 10.713 17.288Q11 17.575 11 18Q11 18.425 10.713 18.712Q10.425 19 10 19ZM14 15.5Q13.375 15.5 12.938 15.062Q12.5 14.625 12.5 14Q12.5 13.375 12.938 12.938Q13.375 12.5 14 12.5Q14.625 12.5 15.062 12.938Q15.5 13.375 15.5 14Q15.5 14.625 15.062 15.062Q14.625 15.5 14 15.5ZM14 11.5Q13.375 11.5 12.938 11.062Q12.5 10.625 12.5 10Q12.5 9.375 12.938 8.938Q13.375 8.5 14 8.5Q14.625 8.5 15.062 8.938Q15.5 9.375 15.5 10Q15.5 10.625 15.062 11.062Q14.625 11.5 14 11.5Z"/>
    </Icon>
  )
});

export default IconMaterialBlurOnSharpFilled;
