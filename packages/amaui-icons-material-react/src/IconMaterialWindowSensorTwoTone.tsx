import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWindowSensorTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindowSensorTwoTone'
      short_name='WindowSensor'

      {...props}
    >
      <path d="M21.925 9.5q-.6 0-1.05-.45-.45-.45-.45-1.05V4q0-.625.45-1.075.45-.45 1.05-.45.625 0 1.075.45.45.45.45 1.075v4q0 .6-.45 1.05-.45.45-1.075.45Zm-19.65 12V2.475H19.3V21.5Zm3.95-11.025H9.2v-1h3.15v1h2.975V6.45h-9.1Zm0 7.075h9.1V13.5h-9.1Zm-.925.925h10.975V5.5H5.3Z"/>
    </Icon>
  )
});

export default IconMaterialWindowSensorTwoTone;
