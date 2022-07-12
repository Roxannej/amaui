import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialQuietTimeRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuietTimeRoundedW700Filled'
      short_name='QuietTime'

      {...props}
    >
      <path d="M13.1 23.5q-2.2 0-4.125-.837-1.925-.838-3.362-2.276-1.438-1.437-2.276-3.362Q2.5 15.1 2.5 12.9q0-3.075 1.638-5.65Q5.775 4.675 8.55 3.3q.975-.5 1.913.037.937.538 1.037 1.638.175 1.875.863 3.6.687 1.725 2.012 3.05 1.325 1.325 3.038 2 1.712.675 3.562.875 1.075.125 1.675.95.6.825.2 1.7-1.3 2.9-3.925 4.625T13.1 23.5Z"/>
    </Icon>
  )
});

export default IconMaterialQuietTimeRoundedW700Filled;
