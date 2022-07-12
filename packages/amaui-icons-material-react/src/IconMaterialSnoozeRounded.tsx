import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSnoozeRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SnoozeRounded'
      short_name='Snooze'

      {...props}
    >
      <path d="M10.35 15.65H13.75Q14.075 15.65 14.288 15.438Q14.5 15.225 14.5 14.9Q14.5 14.6 14.288 14.375Q14.075 14.15 13.775 14.15H11.7L14.225 11.3Q14.35 11.15 14.425 10.962Q14.5 10.775 14.5 10.575Q14.5 10.2 14.225 9.925Q13.95 9.65 13.575 9.65H10.25Q9.925 9.65 9.713 9.862Q9.5 10.075 9.5 10.4Q9.5 10.7 9.713 10.925Q9.925 11.15 10.225 11.15H12.35L9.8 14.025Q9.65 14.2 9.575 14.4Q9.5 14.6 9.5 14.8Q9.5 15.15 9.75 15.4Q10 15.65 10.35 15.65ZM12 22Q10.125 22 8.488 21.288Q6.85 20.575 5.638 19.362Q4.425 18.15 3.712 16.512Q3 14.875 3 13Q3 11.125 3.712 9.487Q4.425 7.85 5.638 6.637Q6.85 5.425 8.488 4.713Q10.125 4 12 4Q13.875 4 15.513 4.713Q17.15 5.425 18.363 6.637Q19.575 7.85 20.288 9.487Q21 11.125 21 13Q21 14.875 20.288 16.512Q19.575 18.15 18.363 19.362Q17.15 20.575 15.513 21.288Q13.875 22 12 22ZM12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13ZM3.425 7.325Q3.15 7.6 2.75 7.6Q2.35 7.6 2.05 7.3Q1.775 7.025 1.775 6.6Q1.775 6.175 2.05 5.9L4.925 3.025Q5.2 2.75 5.6 2.75Q6 2.75 6.3 3.05Q6.575 3.325 6.575 3.75Q6.575 4.175 6.3 4.45ZM20.55 7.3 17.675 4.425Q17.4 4.15 17.4 3.75Q17.4 3.35 17.7 3.05Q17.975 2.775 18.4 2.775Q18.825 2.775 19.1 3.05L21.975 5.925Q22.25 6.2 22.25 6.6Q22.25 7 21.95 7.3Q21.675 7.575 21.25 7.575Q20.825 7.575 20.55 7.3ZM12 20Q14.925 20 16.962 17.962Q19 15.925 19 13Q19 10.075 16.962 8.037Q14.925 6 12 6Q9.075 6 7.038 8.037Q5 10.075 5 13Q5 15.925 7.038 17.962Q9.075 20 12 20Z"/>
    </Icon>
  )
});

export default IconMaterialSnoozeRounded;