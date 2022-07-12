import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDetectorBatteryOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DetectorBatteryOutlinedW700Filled'
      short_name='DetectorBattery'

      {...props}
    >
      <path d="M9.45 18.9h7.1v-2.1h-7.1Zm-1.2-10h7.5l.275-1h-8.05l.275 1Zm0 3.15q-1.125 0-1.975-.675-.85-.675-1.1-1.75l-.4-1.725H4.35q-1.3 0-2.225-.925T1.2 4.75V.6h21.6v4.15q0 1.3-.925 2.225T19.65 7.9h-.425L18.8 9.65q-.275 1.05-1.125 1.725t-1.95.675ZM6.125 21.8q-.65 0-1.112-.463-.463-.462-.463-1.112v-4.75q0-.65.463-1.113.462-.462 1.112-.462h11.75q.65 0 1.113.462.462.463.462 1.113v.8h1.75v3.15h-1.75v.8q0 .65-.462 1.112-.463.463-1.113.463Z"/>
    </Icon>
  )
});

export default IconMaterialDetectorBatteryOutlinedW700Filled;