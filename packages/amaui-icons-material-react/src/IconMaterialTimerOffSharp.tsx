import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTimerOffSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TimerOffSharp'
      short_name='TimerOff'

      {...props}
    >
      <path d="M19.95 17.15 18.45 15.65Q18.725 14.975 18.863 14.312Q19 13.65 19 13Q19 10.1 16.95 8.05Q14.9 6 12 6Q11.4 6 10.725 6.125Q10.05 6.25 9.325 6.525L7.825 5.025Q8.775 4.525 9.838 4.262Q10.9 4 12 4Q13.5 4 14.938 4.5Q16.375 5 17.65 5.95L19.05 4.55L20.45 5.95L19.05 7.35Q20 8.625 20.5 10.062Q21 11.5 21 13Q21 14.05 20.738 15.087Q20.475 16.125 19.95 17.15ZM13 10.2V8H11V8.2ZM19.8 22.6 17.4 20.2Q16.2 21.075 14.812 21.538Q13.425 22 12 22Q10.15 22 8.512 21.288Q6.875 20.575 5.65 19.35Q4.425 18.125 3.712 16.488Q3 14.85 3 13Q3 11.5 3.463 10.113Q3.925 8.725 4.8 7.6L1.4 4.2L2.8 2.8L21.2 21.2ZM12 20Q13.05 20 14.05 19.675Q15.05 19.35 15.925 18.75L6.2 9.025Q5.6 9.9 5.3 10.9Q5 11.9 5 13Q5 15.9 7.05 17.95Q9.1 20 12 20ZM9 3V1H15V3ZM10.9 13.725Q10.9 13.725 10.9 13.725Q10.9 13.725 10.9 13.725Q10.9 13.725 10.9 13.725Q10.9 13.725 10.9 13.725Q10.9 13.725 10.9 13.725Q10.9 13.725 10.9 13.725ZM13.9 11.1Q13.9 11.1 13.9 11.1Q13.9 11.1 13.9 11.1Q13.9 11.1 13.9 11.1Q13.9 11.1 13.9 11.1Q13.9 11.1 13.9 11.1Q13.9 11.1 13.9 11.1Z"/>
    </Icon>
  );
});

export default IconMaterialTimerOffSharp;