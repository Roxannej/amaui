import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialThermometerOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThermometerOutlinedW700Filled'
      short_name='Thermometer'

      {...props}
    >
      <path d="M12 21.85q-2.425 0-4.137-1.712Q6.15 18.425 6.15 16q0-1.275.525-2.425T8.15 11.6V6q0-1.575 1.138-2.713Q10.425 2.15 12 2.15q1.575 0 2.713 1.137Q15.85 4.425 15.85 6v5.6q.975.825 1.487 1.975.513 1.15.513 2.425 0 2.425-1.712 4.138Q14.425 21.85 12 21.85Zm-.7-12.075h1.4V6q0-.275-.212-.488Q12.275 5.3 12 5.3t-.487.212Q11.3 5.725 11.3 6Z"/>
    </Icon>
  )
});

export default IconMaterialThermometerOutlinedW700Filled;
