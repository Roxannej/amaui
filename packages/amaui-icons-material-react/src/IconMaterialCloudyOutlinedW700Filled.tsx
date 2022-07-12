import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCloudyOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloudyOutlinedW700Filled'
      short_name='Cloudy'

      {...props}
    >
      <path d="M6.575 20.85q-2.625 0-4.488-1.8-1.862-1.8-1.862-4.4 0-2.2 1.213-3.962Q2.65 8.925 4.725 8.45 5.5 6.05 7.5 4.6q2-1.45 4.5-1.45 3.05 0 5.25 2.062 2.2 2.063 2.475 5.088 1.8.475 2.925 1.937 1.125 1.463 1.125 3.338 0 2.2-1.537 3.737Q20.7 20.85 18.5 20.85Z"/>
    </Icon>
  )
});

export default IconMaterialCloudyOutlinedW700Filled;
