import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFaceRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FaceRounded'
      short_name='Face'

      {...props}
    >
      <path d="M9 14.25Q8.475 14.25 8.113 13.887Q7.75 13.525 7.75 13Q7.75 12.475 8.113 12.113Q8.475 11.75 9 11.75Q9.525 11.75 9.887 12.113Q10.25 12.475 10.25 13Q10.25 13.525 9.887 13.887Q9.525 14.25 9 14.25ZM15 14.25Q14.475 14.25 14.113 13.887Q13.75 13.525 13.75 13Q13.75 12.475 14.113 12.113Q14.475 11.75 15 11.75Q15.525 11.75 15.887 12.113Q16.25 12.475 16.25 13Q16.25 13.525 15.887 13.887Q15.525 14.25 15 14.25ZM12 20Q15.35 20 17.675 17.675Q20 15.35 20 12Q20 11.4 19.925 10.837Q19.85 10.275 19.65 9.75Q19.125 9.875 18.6 9.938Q18.075 10 17.5 10Q15.225 10 13.2 9.025Q11.175 8.05 9.75 6.3Q8.95 8.25 7.463 9.688Q5.975 11.125 4 11.85V12Q4 15.35 6.325 17.675Q8.65 20 12 20ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22ZM10.65 4.125Q11.7 5.875 13.5 6.938Q15.3 8 17.5 8Q17.85 8 18.175 7.963Q18.5 7.925 18.85 7.875Q17.8 6.125 16 5.062Q14.2 4 12 4Q11.65 4 11.325 4.037Q11 4.075 10.65 4.125ZM4.425 9.475Q5.7 8.75 6.65 7.6Q7.6 6.45 8.075 5.025Q6.8 5.75 5.85 6.9Q4.9 8.05 4.425 9.475ZM10.65 4.125Q10.65 4.125 10.65 4.125Q10.65 4.125 10.65 4.125Q10.65 4.125 10.65 4.125Q10.65 4.125 10.65 4.125Q10.65 4.125 10.65 4.125Q10.65 4.125 10.65 4.125Q10.65 4.125 10.65 4.125Q10.65 4.125 10.65 4.125ZM8.075 5.025Q8.075 5.025 8.075 5.025Q8.075 5.025 8.075 5.025Q8.075 5.025 8.075 5.025Q8.075 5.025 8.075 5.025Z"/>
    </Icon>
  )
});

export default IconMaterialFaceRounded;
