import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWavesSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WavesSharpFilled'
      short_name='Waves'

      {...props}
    >
      <path d="M2 20.35V18.4Q2.725 18.4 3.237 18.175Q3.75 17.95 4.275 17.688Q4.8 17.425 5.438 17.212Q6.075 17 7 17Q7.95 17 8.562 17.212Q9.175 17.425 9.7 17.688Q10.225 17.95 10.75 18.175Q11.275 18.4 12 18.4Q12.725 18.4 13.25 18.175Q13.775 17.95 14.3 17.688Q14.825 17.425 15.45 17.212Q16.075 17 17 17Q17.95 17 18.575 17.212Q19.2 17.425 19.725 17.688Q20.25 17.95 20.775 18.175Q21.3 18.4 22 18.4V20.35Q21.05 20.35 20.413 20.125Q19.775 19.9 19.25 19.637Q18.725 19.375 18.225 19.163Q17.725 18.95 17 18.95Q16.3 18.95 15.788 19.163Q15.275 19.375 14.762 19.637Q14.25 19.9 13.613 20.125Q12.975 20.35 12 20.35Q11.025 20.35 10.387 20.125Q9.75 19.9 9.238 19.637Q8.725 19.375 8.225 19.163Q7.725 18.95 7 18.95Q6.3 18.95 5.788 19.163Q5.275 19.375 4.75 19.637Q4.225 19.9 3.588 20.125Q2.95 20.35 2 20.35ZM2 15.9V13.95Q2.725 13.95 3.237 13.725Q3.75 13.5 4.275 13.238Q4.8 12.975 5.438 12.762Q6.075 12.55 7 12.55Q7.95 12.55 8.562 12.762Q9.175 12.975 9.7 13.238Q10.225 13.5 10.75 13.725Q11.275 13.95 12 13.95Q12.725 13.95 13.25 13.725Q13.775 13.5 14.3 13.238Q14.825 12.975 15.45 12.762Q16.075 12.55 17 12.55Q17.95 12.55 18.575 12.762Q19.2 12.975 19.725 13.238Q20.25 13.5 20.775 13.725Q21.3 13.95 22 13.95V15.9Q21.05 15.9 20.413 15.675Q19.775 15.45 19.25 15.188Q18.725 14.925 18.225 14.712Q17.725 14.5 17 14.5Q16.275 14.5 15.763 14.712Q15.25 14.925 14.738 15.188Q14.225 15.45 13.6 15.675Q12.975 15.9 12 15.9Q11.025 15.9 10.387 15.675Q9.75 15.45 9.238 15.188Q8.725 14.925 8.225 14.712Q7.725 14.5 7 14.5Q6.3 14.5 5.788 14.712Q5.275 14.925 4.75 15.188Q4.225 15.45 3.588 15.675Q2.95 15.9 2 15.9ZM2 7V5.05Q2.725 5.05 3.237 4.825Q3.75 4.6 4.275 4.337Q4.8 4.075 5.438 3.862Q6.075 3.65 7 3.65Q7.95 3.65 8.562 3.862Q9.175 4.075 9.7 4.337Q10.225 4.6 10.75 4.825Q11.275 5.05 12 5.05Q12.725 5.05 13.25 4.825Q13.775 4.6 14.3 4.337Q14.825 4.075 15.45 3.862Q16.075 3.65 17 3.65Q17.95 3.65 18.575 3.862Q19.2 4.075 19.725 4.337Q20.25 4.6 20.775 4.825Q21.3 5.05 22 5.05V7Q21.05 7 20.413 6.775Q19.775 6.55 19.25 6.287Q18.725 6.025 18.225 5.812Q17.725 5.6 17 5.6Q16.3 5.6 15.788 5.812Q15.275 6.025 14.762 6.287Q14.25 6.55 13.613 6.775Q12.975 7 12 7Q11.025 7 10.387 6.775Q9.75 6.55 9.238 6.287Q8.725 6.025 8.225 5.812Q7.725 5.6 7 5.6Q6.3 5.6 5.788 5.812Q5.275 6.025 4.75 6.287Q4.225 6.55 3.588 6.775Q2.95 7 2 7ZM2 11.45V9.5Q2.725 9.5 3.237 9.275Q3.75 9.05 4.275 8.787Q4.8 8.525 5.438 8.312Q6.075 8.1 7 8.1Q7.95 8.1 8.562 8.312Q9.175 8.525 9.7 8.787Q10.225 9.05 10.75 9.275Q11.275 9.5 12 9.5Q12.725 9.5 13.25 9.275Q13.775 9.05 14.3 8.787Q14.825 8.525 15.45 8.312Q16.075 8.1 17 8.1Q17.95 8.1 18.575 8.312Q19.2 8.525 19.725 8.787Q20.25 9.05 20.775 9.275Q21.3 9.5 22 9.5V11.45Q21.05 11.45 20.413 11.225Q19.775 11 19.25 10.738Q18.725 10.475 18.225 10.262Q17.725 10.05 17 10.05Q16.3 10.05 15.788 10.262Q15.275 10.475 14.762 10.738Q14.25 11 13.613 11.225Q12.975 11.45 12 11.45Q11.025 11.45 10.387 11.225Q9.75 11 9.238 10.738Q8.725 10.475 8.225 10.262Q7.725 10.05 7 10.05Q6.3 10.05 5.788 10.262Q5.275 10.475 4.75 10.738Q4.225 11 3.588 11.225Q2.95 11.45 2 11.45Z"/>
    </Icon>
  );
});

export default IconMaterialWavesSharpFilled;