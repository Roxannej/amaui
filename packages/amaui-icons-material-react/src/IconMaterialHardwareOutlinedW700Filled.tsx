import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHardwareOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HardwareOutlinedW700Filled'
      short_name='Hardware'

      {...props}
    >
      <path d="M8.15 10.425V8.85H3.15Q3.15 5.9 5.213 3.837Q7.275 1.775 10.225 1.775H15.85V4.775L18.85 1.775H20.85V11.45H18.85L15.85 8.45V10.425ZM9.725 22.225Q9.075 22.225 8.613 21.763Q8.15 21.3 8.15 20.65V13.575H15.85V20.65Q15.85 21.3 15.388 21.763Q14.925 22.225 14.275 22.225Z"/>
    </Icon>
  )
});

export default IconMaterialHardwareOutlinedW700Filled;