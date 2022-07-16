import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMissedVideoCallRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MissedVideoCallRoundedFilled'
      short_name='MissedVideoCall'

      {...props}
    >
      <path d="M10.7 13.15 8.5 11H9Q9.425 11 9.713 10.712Q10 10.425 10 10Q10 9.575 9.713 9.287Q9.425 9 9 9H6Q5.575 9 5.287 9.287Q5 9.575 5 10V13Q5 13.425 5.287 13.712Q5.575 14 6 14Q6.425 14 6.713 13.712Q7 13.425 7 13V12.3L10 15.3Q10.125 15.425 10.312 15.5Q10.5 15.575 10.7 15.575Q10.9 15.575 11.088 15.5Q11.275 15.425 11.4 15.275L14.525 12.125Q14.8 11.85 14.8 11.45Q14.8 11.05 14.5 10.75Q14.225 10.475 13.8 10.475Q13.375 10.475 13.1 10.75ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H16Q16.825 4 17.413 4.588Q18 5.175 18 6V10.5L21.15 7.35Q21.375 7.125 21.688 7.237Q22 7.35 22 7.7V16.3Q22 16.65 21.688 16.762Q21.375 16.875 21.15 16.65L18 13.5V18Q18 18.825 17.413 19.413Q16.825 20 16 20Z"/>
    </Icon>
  );
});

export default IconMaterialMissedVideoCallRoundedFilled;