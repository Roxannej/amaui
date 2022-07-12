import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWindowSensorOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindowSensorOutlinedW700Filled'
      short_name='WindowSensor'

      {...props}
    >
      <path d="M21.925 9.575q-.65 0-1.113-.463Q20.35 8.65 20.35 8V4q0-.65.462-1.113.463-.462 1.113-.462.65 0 1.113.462Q23.5 3.35 23.5 4v4q0 .65-.462 1.112-.463.463-1.113.463Zm-19.725 12V2.425h17.15v19.15Zm4.15-11.15H9.2v-1h3.15v1h2.85v-3.85H6.35Zm0 7h8.85v-3.85H6.35Zm-1 1H16.2V5.575H5.35Z"/>
    </Icon>
  )
});

export default IconMaterialWindowSensorOutlinedW700Filled;
