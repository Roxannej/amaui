import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDetectorOfflineRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DetectorOfflineRoundedW700'
      short_name='DetectorOffline'

      {...props}
    >
      <path d="M9.9 21.825 7.675 19.6l2.1-2.1-2.1-2.1L9.9 13.175l2.1 2.1 2.1-2.1 2.225 2.225-2.1 2.1 2.1 2.1-2.225 2.225-2.1-2.1ZM4.35 4.75h15.3v-1H4.35v1Zm3.9 4.15h7.5l.275-1h-8.05l.275 1Zm0 3.15q-1.125 0-1.975-.675-.85-.675-1.1-1.75l-.4-1.725H4.35q-1.3 0-2.225-.925T1.2 4.75V.6h21.6v4.15q0 1.3-.925 2.225T19.65 7.9h-.425L18.8 9.65q-.275 1.05-1.125 1.725t-1.95.675Zm-3.9-7.3v-1 1Z"/>
    </Icon>
  )
});

export default IconMaterialDetectorOfflineRoundedW700;
