import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWavesOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WavesOutlinedW700'
      short_name='Waves'

      {...props}
    >
      <path d="M1.225 22.225V19.1Q2 19.1 2.55 18.863Q3.1 18.625 3.663 18.337Q4.225 18.05 4.913 17.812Q5.6 17.575 6.625 17.575Q7.65 17.575 8.325 17.812Q9 18.05 9.55 18.337Q10.1 18.625 10.663 18.863Q11.225 19.1 12 19.1Q12.8 19.1 13.35 18.863Q13.9 18.625 14.45 18.337Q15 18.05 15.675 17.812Q16.35 17.575 17.375 17.575Q18.4 17.575 19.088 17.812Q19.775 18.05 20.338 18.337Q20.9 18.625 21.45 18.863Q22 19.1 22.775 19.1V22.225Q21.775 22.225 21.088 21.988Q20.4 21.75 19.838 21.475Q19.275 21.2 18.713 20.962Q18.15 20.725 17.375 20.725Q16.6 20.725 16.062 20.962Q15.525 21.2 14.975 21.475Q14.425 21.75 13.738 21.988Q13.05 22.225 12 22.225Q10.95 22.225 10.263 21.988Q9.575 21.75 9.025 21.475Q8.475 21.2 7.938 20.962Q7.4 20.725 6.625 20.725Q5.85 20.725 5.288 20.962Q4.725 21.2 4.163 21.475Q3.6 21.75 2.925 21.988Q2.25 22.225 1.225 22.225ZM1.225 16.975V13.825Q2 13.825 2.55 13.587Q3.1 13.35 3.663 13.075Q4.225 12.8 4.913 12.562Q5.6 12.325 6.625 12.325Q7.65 12.325 8.325 12.562Q9 12.8 9.55 13.075Q10.1 13.35 10.663 13.587Q11.225 13.825 12 13.825Q12.8 13.825 13.35 13.587Q13.9 13.35 14.45 13.075Q15 12.8 15.675 12.562Q16.35 12.325 17.375 12.325Q18.4 12.325 19.088 12.562Q19.775 12.8 20.338 13.075Q20.9 13.35 21.45 13.587Q22 13.825 22.775 13.825V16.975Q21.775 16.975 21.088 16.738Q20.4 16.5 19.838 16.212Q19.275 15.925 18.713 15.688Q18.15 15.45 17.375 15.45Q16.6 15.45 16.05 15.688Q15.5 15.925 14.95 16.212Q14.4 16.5 13.725 16.738Q13.05 16.975 12 16.975Q10.95 16.975 10.263 16.738Q9.575 16.5 9.025 16.212Q8.475 15.925 7.938 15.688Q7.4 15.45 6.625 15.45Q5.85 15.45 5.288 15.688Q4.725 15.925 4.163 16.212Q3.6 16.5 2.925 16.738Q2.25 16.975 1.225 16.975ZM1.225 6.475V3.325Q2 3.325 2.55 3.087Q3.1 2.85 3.663 2.562Q4.225 2.275 4.913 2.037Q5.6 1.8 6.625 1.8Q7.65 1.8 8.325 2.037Q9 2.275 9.55 2.562Q10.1 2.85 10.663 3.087Q11.225 3.325 12 3.325Q12.8 3.325 13.35 3.087Q13.9 2.85 14.45 2.562Q15 2.275 15.675 2.037Q16.35 1.8 17.375 1.8Q18.4 1.8 19.088 2.037Q19.775 2.275 20.338 2.562Q20.9 2.85 21.45 3.087Q22 3.325 22.775 3.325V6.475Q21.775 6.475 21.088 6.237Q20.4 6 19.838 5.713Q19.275 5.425 18.713 5.188Q18.15 4.95 17.375 4.95Q16.6 4.95 16.062 5.188Q15.525 5.425 14.975 5.713Q14.425 6 13.738 6.237Q13.05 6.475 12 6.475Q10.95 6.475 10.263 6.237Q9.575 6 9.025 5.713Q8.475 5.425 7.938 5.188Q7.4 4.95 6.625 4.95Q5.85 4.95 5.288 5.188Q4.725 5.425 4.163 5.713Q3.6 6 2.925 6.237Q2.25 6.475 1.225 6.475ZM1.225 11.725V8.575Q2 8.575 2.55 8.337Q3.1 8.1 3.663 7.825Q4.225 7.55 4.913 7.312Q5.6 7.075 6.625 7.075Q7.65 7.075 8.325 7.312Q9 7.55 9.55 7.825Q10.1 8.1 10.663 8.337Q11.225 8.575 12 8.575Q12.8 8.575 13.35 8.337Q13.9 8.1 14.45 7.825Q15 7.55 15.675 7.312Q16.35 7.075 17.375 7.075Q18.4 7.075 19.088 7.312Q19.775 7.55 20.338 7.825Q20.9 8.1 21.45 8.337Q22 8.575 22.775 8.575V11.725Q21.775 11.725 21.088 11.488Q20.4 11.25 19.838 10.962Q19.275 10.675 18.713 10.438Q18.15 10.2 17.375 10.2Q16.6 10.2 16.062 10.438Q15.525 10.675 14.975 10.962Q14.425 11.25 13.738 11.488Q13.05 11.725 12 11.725Q10.95 11.725 10.263 11.488Q9.575 11.25 9.025 10.962Q8.475 10.675 7.938 10.438Q7.4 10.2 6.625 10.2Q5.85 10.2 5.288 10.438Q4.725 10.675 4.163 10.962Q3.6 11.25 2.925 11.488Q2.25 11.725 1.225 11.725Z"/>
    </Icon>
  )
});

export default IconMaterialWavesOutlinedW700;