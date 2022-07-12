import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDetectorOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DetectorOutlinedW700Filled'
      short_name='Detector'

      {...props}
    >
      <path d="M12 21.825q-2.35 0-4.462-.95-2.113-.95-3.763-2.6L5.65 16.4q1.275 1.275 2.912 2.025 1.638.75 3.438.75 1.8 0 3.45-.737 1.65-.738 2.925-2.013l1.85 1.85q-1.65 1.65-3.763 2.6-2.112.95-4.462.95Zm0-4.65q-1.425 0-2.725-.55t-2.35-1.5L8.8 13.25q.675.575 1.5.925.825.35 1.7.35t1.688-.337q.812-.338 1.512-.913l1.875 1.85q-1.05.95-2.35 1.5t-2.725.55ZM8.25 8.9h7.5l.275-1h-8.05l.275 1Zm0 3.15q-1.125 0-1.975-.675-.85-.675-1.1-1.75l-.4-1.725H4.35q-1.3 0-2.225-.925T1.2 4.75V.6h21.6v4.15q0 1.3-.925 2.225T19.65 7.9h-.425L18.8 9.65q-.275 1.05-1.125 1.725t-1.95.675Z"/>
    </Icon>
  )
});

export default IconMaterialDetectorOutlinedW700Filled;
