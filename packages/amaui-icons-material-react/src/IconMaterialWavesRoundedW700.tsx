import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWavesRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WavesRoundedW700'
      short_name='Waves'

      {...props}
    >
      <path d="M1.225 20.65Q1.225 20.1 1.638 19.575Q2.05 19.05 2.725 18.775Q3.55 18.45 4.35 18.012Q5.15 17.575 6.625 17.575Q7.65 17.575 8.325 17.812Q9 18.05 9.55 18.337Q10.1 18.625 10.663 18.863Q11.225 19.1 12 19.1Q12.8 19.1 13.35 18.863Q13.9 18.625 14.45 18.337Q15 18.05 15.675 17.812Q16.35 17.575 17.375 17.575Q18.85 17.575 19.65 18.012Q20.45 18.45 21.275 18.775Q21.95 19.05 22.363 19.562Q22.775 20.075 22.775 20.65Q22.775 21.325 22.288 21.762Q21.8 22.2 21.2 22.025Q20.075 21.725 19.325 21.225Q18.575 20.725 17.375 20.725Q16.6 20.725 16.062 20.962Q15.525 21.2 14.975 21.475Q14.425 21.75 13.738 21.988Q13.05 22.225 12 22.225Q10.95 22.225 10.263 21.988Q9.575 21.75 9.025 21.475Q8.475 21.2 7.938 20.962Q7.4 20.725 6.625 20.725Q5.425 20.725 4.675 21.225Q3.925 21.725 2.8 22.025Q2.2 22.2 1.713 21.762Q1.225 21.325 1.225 20.65ZM1.225 15.4Q1.225 14.85 1.638 14.325Q2.05 13.8 2.725 13.525Q3.55 13.2 4.35 12.762Q5.15 12.325 6.625 12.325Q7.65 12.325 8.325 12.562Q9 12.8 9.55 13.075Q10.1 13.35 10.663 13.587Q11.225 13.825 12 13.825Q12.8 13.825 13.35 13.587Q13.9 13.35 14.45 13.075Q15 12.8 15.675 12.562Q16.35 12.325 17.375 12.325Q18.85 12.325 19.65 12.762Q20.45 13.2 21.275 13.525Q21.95 13.8 22.363 14.312Q22.775 14.825 22.775 15.4Q22.775 16.075 22.288 16.5Q21.8 16.925 21.2 16.75Q20.075 16.45 19.325 15.95Q18.575 15.45 17.375 15.45Q16.6 15.45 16.05 15.688Q15.5 15.925 14.95 16.212Q14.4 16.5 13.725 16.738Q13.05 16.975 12 16.975Q10.95 16.975 10.263 16.738Q9.575 16.5 9.025 16.212Q8.475 15.925 7.938 15.688Q7.4 15.45 6.625 15.45Q5.425 15.45 4.675 15.95Q3.925 16.45 2.8 16.75Q2.2 16.925 1.713 16.5Q1.225 16.075 1.225 15.4ZM1.225 4.875Q1.225 4.325 1.638 3.812Q2.05 3.3 2.725 3.025Q3.55 2.7 4.35 2.25Q5.15 1.8 6.625 1.8Q7.65 1.8 8.325 2.037Q9 2.275 9.55 2.562Q10.1 2.85 10.663 3.087Q11.225 3.325 12 3.325Q12.8 3.325 13.35 3.087Q13.9 2.85 14.45 2.562Q15 2.275 15.675 2.037Q16.35 1.8 17.375 1.8Q18.85 1.8 19.65 2.25Q20.45 2.7 21.275 3.025Q21.95 3.3 22.363 3.8Q22.775 4.3 22.775 4.875Q22.775 5.55 22.288 5.988Q21.8 6.425 21.2 6.25Q20.075 5.95 19.325 5.45Q18.575 4.95 17.375 4.95Q16.6 4.95 16.062 5.188Q15.525 5.425 14.975 5.713Q14.425 6 13.738 6.237Q13.05 6.475 12 6.475Q10.95 6.475 10.263 6.237Q9.575 6 9.025 5.713Q8.475 5.425 7.938 5.188Q7.4 4.95 6.625 4.95Q5.425 4.95 4.675 5.45Q3.925 5.95 2.8 6.25Q2.2 6.425 1.713 5.988Q1.225 5.55 1.225 4.875ZM1.225 10.15Q1.225 9.6 1.638 9.075Q2.05 8.55 2.725 8.275Q3.55 7.95 4.35 7.512Q5.15 7.075 6.625 7.075Q7.65 7.075 8.325 7.312Q9 7.55 9.55 7.825Q10.1 8.1 10.663 8.337Q11.225 8.575 12 8.575Q12.8 8.575 13.35 8.337Q13.9 8.1 14.45 7.825Q15 7.55 15.675 7.312Q16.35 7.075 17.375 7.075Q18.85 7.075 19.65 7.512Q20.45 7.95 21.275 8.275Q21.95 8.55 22.363 9.062Q22.775 9.575 22.775 10.15Q22.775 10.825 22.288 11.25Q21.8 11.675 21.2 11.5Q20.075 11.2 19.325 10.7Q18.575 10.2 17.375 10.2Q16.6 10.2 16.062 10.438Q15.525 10.675 14.975 10.962Q14.425 11.25 13.738 11.488Q13.05 11.725 12 11.725Q10.95 11.725 10.263 11.488Q9.575 11.25 9.025 10.962Q8.475 10.675 7.938 10.438Q7.4 10.2 6.625 10.2Q5.425 10.2 4.675 10.7Q3.925 11.2 2.8 11.5Q2.2 11.675 1.713 11.25Q1.225 10.825 1.225 10.15Z"/>
    </Icon>
  )
});

export default IconMaterialWavesRoundedW700;
