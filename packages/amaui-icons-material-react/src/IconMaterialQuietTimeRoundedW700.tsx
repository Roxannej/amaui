import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialQuietTimeRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuietTimeRoundedW700'
      short_name='QuietTime'

      {...props}
    >
      <path d="M13.1 23.5q-2.2 0-4.125-.837-1.925-.838-3.362-2.276-1.438-1.437-2.276-3.362Q2.5 15.1 2.5 12.9q0-3.075 1.638-5.65Q5.775 4.675 8.55 3.3q.975-.5 1.913.037.937.538 1.037 1.638.175 1.875.863 3.6.687 1.725 2.012 3.05 1.325 1.325 3.038 2 1.712.675 3.562.875 1.075.125 1.675.95.6.825.2 1.7-1.3 2.9-3.925 4.625T13.1 23.5Zm0-3.15q1.75 0 3.313-.775 1.562-.775 2.612-2.2-1.95-.35-3.7-1.238-1.75-.887-3.175-2.312-1.425-1.425-2.325-3.163-.9-1.737-1.25-3.687Q7.2 8.05 6.425 9.6q-.775 1.55-.775 3.3 0 3.125 2.163 5.288Q9.975 20.35 13.1 20.35Zm-.95-6.525Z"/>
    </Icon>
  )
});

export default IconMaterialQuietTimeRoundedW700;
