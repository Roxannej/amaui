import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHumidityMidRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HumidityMidRoundedW700'
      short_name='HumidityMid'

      {...props}
    >
      <path d="M12 22.35q-3.65 0-6.25-2.538-2.6-2.537-2.6-6.162 0-1.825.688-3.425.687-1.6 1.937-2.8L12 1.3l6.225 6.125q1.25 1.2 1.938 2.8.687 1.6.687 3.425 0 3.625-2.6 6.162-2.6 2.538-6.25 2.538Zm0-16.625-4.025 4q-.725.7-1.137 1.55-.413.85-.513 1.825h11.35q-.1-.975-.512-1.825-.413-.85-1.138-1.55Z"/>
    </Icon>
  )
});

export default IconMaterialHumidityMidRoundedW700;