import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRadarSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RadarSharp'
      short_name='Radar'

      {...props}
    >
      <path d="M12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22ZM12 18Q9.5 18 7.75 16.25Q6 14.5 6 12Q6 9.5 7.75 7.75Q9.5 6 12 6Q14.5 6 16.25 7.75Q18 9.5 18 12Q18 12.975 17.7 13.875Q17.4 14.775 16.875 15.5L18.3 16.925Q19.1 15.9 19.55 14.65Q20 13.4 20 12Q20 8.65 17.675 6.325Q15.35 4 12 4Q8.65 4 6.325 6.325Q4 8.65 4 12Q4 15.35 6.325 17.675Q8.65 20 12 20Q13.4 20 14.637 19.562Q15.875 19.125 16.9 18.325L15.475 16.9Q14.75 17.425 13.863 17.712Q12.975 18 12 18ZM12 14Q11.175 14 10.588 13.412Q10 12.825 10 12Q10 11.175 10.588 10.587Q11.175 10 12 10Q12.825 10 13.413 10.587Q14 11.175 14 12Q14 12.15 13.988 12.287Q13.975 12.425 13.925 12.55L15.425 14.05Q15.7 13.6 15.85 13.087Q16 12.575 16 12Q16 10.35 14.825 9.175Q13.65 8 12 8Q10.35 8 9.175 9.175Q8 10.35 8 12Q8 13.65 9.175 14.825Q10.35 16 12 16Q12.55 16 13.062 15.863Q13.575 15.725 14.025 15.45L12.5 13.925Q12.375 13.975 12.25 13.988Q12.125 14 12 14Z"/>
    </Icon>
  )
});

export default IconMaterialRadarSharp;
