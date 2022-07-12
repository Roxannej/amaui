import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCloudSyncRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloudSyncRoundedFilled'
      short_name='CloudSync'

      {...props}
    >
      <path d="M15 20Q13.75 20 12.875 19.125Q12 18.25 12 17Q12 15.8 12.825 14.938Q13.65 14.075 14.85 14.025Q15.275 13.125 16.113 12.562Q16.95 12 18 12Q19.325 12 20.288 12.863Q21.25 13.725 21.45 15Q22.5 15 23.25 15.725Q24 16.45 24 17.475Q24 18.525 23.275 19.262Q22.55 20 21.5 20ZM5 20Q4.575 20 4.287 19.712Q4 19.425 4 19Q4 18.575 4.287 18.288Q4.575 18 5 18H6.725Q5.45 16.9 4.725 15.35Q4 13.8 4 12Q4 9.625 5.238 7.713Q6.475 5.8 8.475 4.825Q9.05 4.55 9.525 4.825Q10 5.1 10 5.75Q10 6.05 9.825 6.262Q9.65 6.475 9.4 6.6Q7.9 7.325 6.95 8.762Q6 10.2 6 12Q6 13.35 6.537 14.488Q7.075 15.625 8 16.45V15Q8 14.575 8.288 14.287Q8.575 14 9 14Q9.425 14 9.713 14.287Q10 14.575 10 15V19Q10 19.425 9.713 19.712Q9.425 20 9 20ZM17.9 11Q17.725 9.975 17.225 9.1Q16.725 8.225 16 7.55V9Q16 9.425 15.713 9.712Q15.425 10 15 10Q14.575 10 14.288 9.712Q14 9.425 14 9V5Q14 4.575 14.288 4.287Q14.575 4 15 4H19Q19.425 4 19.712 4.287Q20 4.575 20 5Q20 5.425 19.712 5.713Q19.425 6 19 6H17.275Q18.35 6.95 19.038 8.225Q19.725 9.5 19.925 11Z"/>
    </Icon>
  )
});

export default IconMaterialCloudSyncRoundedFilled;
