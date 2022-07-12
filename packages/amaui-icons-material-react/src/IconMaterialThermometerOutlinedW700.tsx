import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialThermometerOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThermometerOutlinedW700'
      short_name='Thermometer'

      {...props}
    >
      <path d="M12 21.85q-2.425 0-4.137-1.712Q6.15 18.425 6.15 16q0-1.3.525-2.438Q7.2 12.425 8.15 11.6V6q0-1.575 1.138-2.713Q10.425 2.15 12 2.15q1.575 0 2.713 1.137Q15.85 4.425 15.85 6v5.6q.95.8 1.475 1.95.525 1.15.525 2.45 0 2.425-1.712 4.138Q14.425 21.85 12 21.85Zm0-3.15q1.075 0 1.888-.8.812-.8.812-1.9 0-.8-.4-1.488-.4-.687-1.075-1.037l-.525-.325V6q0-.275-.212-.488Q12.275 5.3 12 5.3t-.487.212Q11.3 5.725 11.3 6v7.15l-.525.325q-.675.35-1.075 1.037-.4.688-.4 1.488 0 1.1.8 1.9.8.8 1.9.8Z"/>
    </Icon>
  )
});

export default IconMaterialThermometerOutlinedW700;