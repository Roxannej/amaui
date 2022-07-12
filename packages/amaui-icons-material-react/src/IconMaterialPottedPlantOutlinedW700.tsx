import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPottedPlantOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PottedPlantOutlinedW700'
      short_name='PottedPlant'

      {...props}
    >
      <path d="M9.075 20.6h5.85l.875-3.5H8.2l.875 3.5Zm0 3.15q-1.1 0-1.95-.675Q6.275 22.4 6 21.35L4.95 17.1h14.1L18 21.35q-.275 1.05-1.125 1.725t-1.95.675Zm-4-9.8H18.9V12.7H5.075v1.25ZM12 7.2q0-3 2.088-5.1Q16.175 0 19.15 0q0 2.725-1.6 4.7t-3.975 2.35v2.5h8.475v4.4q0 1.325-.9 2.238-.9.912-2.1.912H4.95q-1.225 0-2.125-.912-.9-.913-.9-2.238v-4.4h8.5V7.075q-2.4-.35-3.987-2.35Q4.85 2.725 4.85 0q2.975 0 5.062 2.1Q12 4.2 12 7.2Z"/>
    </Icon>
  )
});

export default IconMaterialPottedPlantOutlinedW700;