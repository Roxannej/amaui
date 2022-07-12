import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRingVolumeSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RingVolumeSharpW700Filled'
      short_name='RingVolume'

      {...props}
    >
      <path d="M4.325 22.05 -0.3 17.55Q2.225 14.575 5.237 13.1Q8.25 11.625 12.025 11.625Q15.8 11.625 18.8 13.1Q21.8 14.575 24.325 17.55L19.7 22.05L15.25 18.725V14.85Q14.425 14.6 13.663 14.488Q12.9 14.375 12.025 14.375Q11.15 14.375 10.375 14.488Q9.6 14.6 8.775 14.85V18.725ZM10.55 7.425V1.675H13.325V7.425ZM17.575 10.4 15.6 8.45 19.675 4.375 21.65 6.3ZM6.3 10.4 2.2 6.3 4.175 4.375 8.275 8.45Z"/>
    </Icon>
  )
});

export default IconMaterialRingVolumeSharpW700Filled;
