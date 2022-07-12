import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHumidityLowOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HumidityLowOutlinedW700Filled'
      short_name='HumidityLow'

      {...props}
    >
      <path d="M12 22.35q-3.65 0-6.25-2.55t-2.6-6.175q0-1.825.688-3.413.687-1.587 1.937-2.787L12 1.3l6.225 6.125q1.25 1.2 1.938 2.787.687 1.588.687 3.413 0 3.625-2.6 6.175T12 22.35Zm0-16.625-4.025 4q-.8.8-1.237 1.775-.438.975-.438 2.125 0 2.3 1.663 3.937Q9.625 19.2 12 19.2t4.038-1.638q1.662-1.637 1.662-3.937 0-1.15-.438-2.125-.437-.975-1.237-1.775Z"/>
    </Icon>
  )
});

export default IconMaterialHumidityLowOutlinedW700Filled;
