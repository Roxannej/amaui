import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRingVolumeOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RingVolumeOutlined'
      short_name='RingVolume'

      {...props}
    >
      <path d="M12 12Q14.95 12 17.812 13.188Q20.675 14.375 22.9 16.75Q23.2 17.05 23.2 17.45Q23.2 17.85 22.9 18.15L20.6 20.4Q20.325 20.675 19.963 20.7Q19.6 20.725 19.3 20.5L16 18V14.65Q15.05 14.35 14.05 14.175Q13.05 14 12 14Q10.95 14 9.95 14.175Q8.95 14.35 8 14.65V18L4.7 20.5Q4.4 20.725 4.038 20.7Q3.675 20.675 3.4 20.4L1.1 18.15Q0.8 17.85 0.8 17.45Q0.8 17.05 1.1 16.75Q3.3 14.375 6.175 13.188Q9.05 12 12 12ZM4.2 18.4 6 17V15.45Q5.275 15.825 4.6 16.312Q3.925 16.8 3.2 17.4ZM19.8 18.4 20.8 17.45Q20.075 16.8 19.4 16.325Q18.725 15.85 18 15.5V17ZM11 7.05V2.05H13V7.05ZM17.6 9.9 16.2 8.45 19.75 4.9 21.15 6.35ZM6.4 9.9 2.85 6.35 4.25 4.9 7.8 8.45ZM18 15.5Q18 15.5 18 15.5Q18 15.5 18 15.5ZM6 15.45Q6 15.45 6 15.45Q6 15.45 6 15.45Z"/>
    </Icon>
  )
});

export default IconMaterialRingVolumeOutlined;
