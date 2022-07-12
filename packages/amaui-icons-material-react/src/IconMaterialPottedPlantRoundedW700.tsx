import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPottedPlantRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PottedPlantRoundedW700'
      short_name='PottedPlant'

      {...props}
    >
      <path d="M9.075 20.6h5.85l.875-3.5H8.2l.875 3.5Zm0 3.15q-1.1 0-1.95-.675Q6.275 22.4 6 21.35L4.95 17.1h14.1L18 21.35q-.275 1.05-1.125 1.725t-1.95.675Zm-4-9.8H18.9V12.7H5.075v1.25ZM6.175.125q2.5.475 4.163 2.45Q12 4.55 12 7.2q0-2.65 1.663-4.625Q15.325.6 17.825.125q.525-.1.925.275t.3.925q-.375 2.275-1.887 3.837-1.513 1.563-3.588 1.888v2.5h6.9q.65 0 1.112.462.463.463.463 1.113v2.825q0 1.325-.9 2.238-.9.912-2.1.912H4.95q-1.225 0-2.125-.912-.9-.913-.9-2.238v-2.825q0-.65.463-1.113Q2.85 9.55 3.5 9.55h6.925V7.075q-2.1-.325-3.6-1.9T4.95 1.325q-.1-.55.3-.925t.925-.275Z"/>
    </Icon>
  )
});

export default IconMaterialPottedPlantRoundedW700;
