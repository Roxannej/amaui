import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialQuietTimeOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuietTimeOutlinedW700'
      short_name='QuietTime'

      {...props}
    >
      <path d="M13.1 23.5q-2.2 0-4.125-.837-1.925-.838-3.362-2.276-1.438-1.437-2.276-3.362Q2.5 15.1 2.5 12.9q0-3.95 2.575-6.913Q7.65 3.025 11.5 2.325q-.225 2.575.425 5.037.65 2.463 2.45 4.263 1.8 1.8 4.25 2.412 2.45.613 5 .563-.65 3.825-3.612 6.362Q17.05 23.5 13.1 23.5Zm0-3.15q1.75 0 3.313-.775 1.562-.775 2.612-2.2-1.95-.35-3.7-1.238-1.75-.887-3.175-2.312-1.425-1.425-2.325-3.163-.9-1.737-1.25-3.687Q7.2 8.05 6.425 9.6q-.775 1.55-.775 3.3 0 3.125 2.163 5.288Q9.975 20.35 13.1 20.35Zm-.95-6.525Z"/>
    </Icon>
  )
});

export default IconMaterialQuietTimeOutlinedW700;