import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMotionSensorActiveTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MotionSensorActiveTwoTone'
      short_name='MotionSensorActive'

      {...props}
    >
      <path d="M4.575 12.925h3.05q.275 1.325 1.2 2.25.925.925 2.25 1.2v3.05Q8.5 19.1 6.7 17.3q-1.8-1.8-2.125-4.375Zm6.5-8.35v3.05q-1.325.25-2.25 1.187-.925.938-1.2 2.238h-3.05Q4.9 8.5 6.7 6.713q1.8-1.788 4.375-2.138Zm.925 4.9q1.075 0 1.8.737.725.738.725 1.788t-.737 1.775Q13.05 14.5 12 14.5t-1.775-.725Q9.5 13.05 9.5 12q0-1.075.725-1.8.725-.725 1.775-.725Zm4.375 3.45h3.05q-.35 2.575-2.137 4.375-1.788 1.8-4.338 2.125v-3.05q1.3-.275 2.238-1.2.937-.925 1.187-2.25Zm-3.425-8.35Q15.5 4.9 17.288 6.7q1.787 1.8 2.137 4.35h-3.05q-.25-1.3-1.187-2.238-.938-.937-2.238-1.187ZM1.375 8.05V4.4q0-1.275.875-2.15t2.15-.875h3.65V4.4H4.4v3.65ZM8.05 22.625H4.4q-1.275 0-2.15-.875t-.875-2.15v-3.65H4.4v3.65h3.65Zm7.9 0V19.6h3.65v-3.65h3.025v3.65q0 1.275-.875 2.15t-2.15.875ZM19.6 8.05V4.4h-3.65V1.375h3.65q1.275 0 2.15.875t.875 2.15v3.65Z"/>
    </Icon>
  )
});

export default IconMaterialMotionSensorActiveTwoTone;
