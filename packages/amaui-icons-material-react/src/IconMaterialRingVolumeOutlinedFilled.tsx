import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRingVolumeOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RingVolumeOutlinedFilled'
      short_name='RingVolume'

      {...props}
    >
      <path d="M12.025 12Q15.15 12 17.975 13.238Q20.8 14.475 22.925 16.75Q23.2 17.025 23.2 17.45Q23.2 17.875 22.925 18.15L20.625 20.4Q20.35 20.675 19.988 20.7Q19.625 20.725 19.325 20.5L16.025 18V14.65Q15.05 14.325 14.05 14.162Q13.05 14 12.025 14Q11 14 10 14.162Q9 14.325 8.025 14.65V18L4.725 20.5Q4.425 20.725 4.062 20.7Q3.7 20.675 3.425 20.4L1.125 18.15Q0.85 17.875 0.85 17.45Q0.85 17.025 1.125 16.75Q3.25 14.45 6.075 13.225Q8.9 12 12.025 12ZM11.05 7.05V2.05H13.05V7.05ZM17.65 9.9 16.25 8.45 19.8 4.9 21.2 6.35ZM6.45 9.9 2.9 6.35 4.3 4.9 7.85 8.45Z"/>
    </Icon>
  )
});

export default IconMaterialRingVolumeOutlinedFilled;