import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVolcanoRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolcanoRounded'
      short_name='Volcano'

      {...props}
    >
      <path d="M3.25 19.2 5.475 14.2Q5.725 13.65 6.213 13.325Q6.7 13 7.3 13H9L10.5 9.25Q10.725 8.675 11.225 8.337Q11.725 8 12.35 8H16.5Q17.175 8 17.7 8.4Q18.225 8.8 18.425 9.45L21.275 19.45Q21.55 20.4 20.95 21.2Q20.35 22 19.35 22H5.075Q3.975 22 3.388 21.1Q2.8 20.2 3.25 19.2ZM5.075 20H19.35Q19.35 20 19.35 20Q19.35 20 19.35 20L16.5 10Q16.5 10 16.5 10Q16.5 10 16.5 10H12.35Q12.35 10 12.35 10Q12.35 10 12.35 10L10.35 15H7.3Q7.3 15 7.3 15Q7.3 15 7.3 15L5.075 20Q5.075 20 5.075 20Q5.075 20 5.075 20ZM13 4V2Q13 1.575 13.288 1.287Q13.575 1 14 1Q14.425 1 14.713 1.287Q15 1.575 15 2V4Q15 4.425 14.713 4.712Q14.425 5 14 5Q13.575 5 13.288 4.712Q13 4.425 13 4ZM18.225 6.175Q17.95 6.45 17.525 6.45Q17.1 6.45 16.825 6.175Q16.55 5.9 16.55 5.475Q16.55 5.05 16.825 4.775L18.275 3.325Q18.55 3.05 18.975 3.05Q19.4 3.05 19.675 3.325Q19.95 3.6 19.95 4.025Q19.95 4.45 19.675 4.725ZM9.775 6.175 8.325 4.725Q8.05 4.45 8.062 4.025Q8.075 3.6 8.35 3.325Q8.625 3.05 9.05 3.05Q9.475 3.05 9.75 3.325L11.175 4.775Q11.45 5.05 11.45 5.475Q11.45 5.9 11.175 6.175Q10.9 6.45 10.475 6.45Q10.05 6.45 9.775 6.175ZM19.35 20H5.075Q5.075 20 5.075 20Q5.075 20 5.075 20H7.3Q7.3 20 7.3 20Q7.3 20 7.3 20H10.35H12.35Q12.35 20 12.35 20Q12.35 20 12.35 20H16.5Q16.5 20 16.5 20Q16.5 20 16.5 20H19.35Q19.35 20 19.35 20Q19.35 20 19.35 20Z"/>
    </Icon>
  )
});

export default IconMaterialVolcanoRounded;
