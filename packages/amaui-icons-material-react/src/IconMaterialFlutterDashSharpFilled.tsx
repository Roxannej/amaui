import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlutterDashSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlutterDashSharpFilled'
      short_name='FlutterDash'

      {...props}
    >
      <path d="M7.375 16Q7.3 15.9 7.863 15.213Q8.425 14.525 9.15 13.75Q9.975 12.825 11.075 11.7Q11.275 11.4 11.637 11.3Q12 11.2 12.35 11.325Q12.475 11.375 12.575 11.45Q12.675 11.525 12.775 11.65Q12.95 11.875 12.988 12.087Q13.025 12.3 13 12.5Q12.95 12.775 12.812 12.975Q12.675 13.175 12.45 13.3Q11.075 14.125 10 14.75Q9.05 15.275 8.25 15.688Q7.45 16.1 7.375 16ZM10.75 23Q10.625 23 10.5 22.95Q10.375 22.9 10.3 22.775Q10.2 22.625 10.1 22.363Q10 22.1 10 21.75Q10 21.525 10.025 21.337Q10.05 21.15 10.1 20.95Q9.425 20.825 8.963 20.275Q8.5 19.725 8.5 19Q8.5 18.9 8.575 18.475Q6.725 17.825 5.588 16.4Q4.45 14.975 4.125 12.725Q4 12.85 3.85 12.925Q3.7 13 3.5 13Q3.125 13 2.562 12.438Q2 11.875 2 10Q2 8.275 3.013 6.887Q4.025 5.5 5 5.5Q5.325 5.5 5.412 5.787Q5.5 6.075 5.5 6.35Q6.45 5 7.888 4.125Q9.325 3.25 11.05 3.05Q11.2 2.325 11.775 1.912Q12.35 1.5 13 1.5V2.5Q13.1 2.35 13.25 2.25Q13.375 2.15 13.562 2.075Q13.75 2 14 2Q14.25 2 14.438 2.075Q14.625 2.15 14.75 2.25Q14.9 2.35 15 2.5Q14.625 2.5 14.375 2.725Q14.125 2.95 14.05 3.275Q15.4 3.625 16.55 4.425Q17.7 5.225 18.5 6.35Q18.5 6.075 18.587 5.787Q18.675 5.5 19 5.5Q19.975 5.5 20.988 6.887Q22 8.275 22 10Q22 11.875 21.438 12.438Q20.875 13 20.5 13Q20.325 13 20.163 12.938Q20 12.875 19.875 12.75Q19.525 15.25 18.163 16.738Q16.8 18.225 14.55 18.725Q14.625 19.075 14.887 19.288Q15.15 19.5 15.5 19.5H16.075Q16.25 19.5 16.375 19.6Q16.5 19.7 16.55 19.85Q16.675 20.25 16.988 20.6Q17.3 20.95 17.575 21.175Q17.775 21.35 17.763 21.587Q17.75 21.825 17.55 21.95Q17.275 22.15 16.85 22.3Q16.425 22.45 15.75 22.5Q15.625 22.5 15.5 22.45Q15.375 22.4 15.3 22.275Q15.2 22.125 15.1 21.863Q15 21.6 15 21.25Q15 21.025 15.025 20.837Q15.05 20.65 15.1 20.45Q14.5 20.325 14.088 19.9Q13.675 19.475 13.55 18.9Q13.175 18.95 12.8 18.975Q12.425 19 12 19Q11.35 19 10.738 18.938Q10.125 18.875 9.55 18.75Q9.55 18.75 9.5 19Q9.5 19.425 9.788 19.712Q10.075 20 10.5 20H11.075Q11.25 20 11.375 20.1Q11.5 20.2 11.55 20.35Q11.675 20.75 11.988 21.1Q12.3 21.45 12.575 21.675Q12.775 21.85 12.762 22.087Q12.75 22.325 12.55 22.45Q12.275 22.65 11.85 22.8Q11.425 22.95 10.75 23ZM18.75 13.225Q18.875 12.725 18.938 12.175Q19 11.625 19 11Q19 8.1 16.95 6.05Q14.9 4 12 4Q9.1 4 7.05 6.05Q5 8.1 5 11Q5 11.6 5.062 12.15Q5.125 12.7 5.25 13.2Q5.375 12.7 5.588 12.212Q5.8 11.725 6.075 11.3Q5.925 10.95 5.838 10.562Q5.75 10.175 5.75 9.75Q5.75 8.175 6.838 7.087Q7.925 6 9.5 6Q10.225 6 10.863 6.262Q11.5 6.525 12 6.975Q12.5 6.525 13.137 6.262Q13.775 6 14.5 6Q16.075 6 17.163 7.087Q18.25 8.175 18.25 9.75Q18.25 10.175 18.163 10.562Q18.075 10.95 17.9 11.3Q18.175 11.725 18.4 12.212Q18.625 12.7 18.75 13.225ZM12 18Q14.175 18 15.663 17.325Q17.15 16.65 17.975 15.3Q17.975 15.225 17.988 15.15Q18 15.075 18 15Q18 14.25 17.825 13.55Q17.65 12.85 17.3 12.225Q16.775 12.8 16.062 13.15Q15.35 13.5 14.5 13.5Q14.3 13.5 14.1 13.475Q13.9 13.45 13.7 13.4Q13.825 13.225 13.888 13.037Q13.95 12.85 13.975 12.65Q14 12.575 14 12.45Q14.125 12.475 14.25 12.488Q14.375 12.5 14.5 12.5Q15.65 12.5 16.45 11.7Q17.25 10.9 17.25 9.75Q17.25 8.6 16.45 7.8Q15.65 7 14.5 7Q14 7 13.525 7.188Q13.05 7.375 12.675 7.725L12 8.325L11.325 7.725Q10.95 7.375 10.475 7.188Q10 7 9.5 7Q8.35 7 7.55 7.8Q6.75 8.6 6.75 9.75Q6.75 10.775 7.388 11.512Q8.025 12.25 8.975 12.45L8.225 13.275Q7.775 13.1 7.388 12.837Q7 12.575 6.7 12.225Q6.35 12.85 6.175 13.55Q6 14.25 6 15V15.25Q6.85 16.6 8.35 17.3Q9.85 18 12 18ZM14.5 11.5Q13.875 11.5 13.438 10.988Q13 10.475 13 9.75Q13 9.025 13.438 8.512Q13.875 8 14.5 8Q15.125 8 15.562 8.512Q16 9.025 16 9.75Q16 10.475 15.562 10.988Q15.125 11.5 14.5 11.5ZM14.875 9.25Q15.05 9.25 15.15 9.137Q15.25 9.025 15.25 8.875Q15.25 8.725 15.137 8.613Q15.025 8.5 14.875 8.5Q14.7 8.5 14.6 8.613Q14.5 8.725 14.5 8.875Q14.5 9.05 14.613 9.15Q14.725 9.25 14.875 9.25ZM9.5 11.5Q8.875 11.5 8.438 10.988Q8 10.475 8 9.75Q8 9.025 8.438 8.512Q8.875 8 9.5 8Q10.125 8 10.562 8.512Q11 9.025 11 9.75Q11 10.475 10.562 10.988Q10.125 11.5 9.5 11.5ZM9.875 9.25Q10.05 9.25 10.15 9.137Q10.25 9.025 10.25 8.875Q10.25 8.725 10.137 8.613Q10.025 8.5 9.875 8.5Q9.7 8.5 9.6 8.613Q9.5 8.725 9.5 8.875Q9.5 9.05 9.613 9.15Q9.725 9.25 9.875 9.25Z"/>
    </Icon>
  )
});

export default IconMaterialFlutterDashSharpFilled;
