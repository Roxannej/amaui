import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCloudOffOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloudOffOutlinedW700Filled'
      short_name='CloudOff'

      {...props}
    >
      <path d="M22.125 19.375 7.525 4.775Q8.4 4.075 9.6 3.687Q10.8 3.3 12 3.3Q15.05 3.3 17.25 5.375Q19.45 7.45 19.725 10.475Q21.525 10.95 22.65 12.375Q23.775 13.8 23.775 15.65Q23.775 16.775 23.288 17.788Q22.8 18.8 22.125 19.375ZM20.15 23.55 17.425 20.85H6.5Q3.875 20.85 2.05 19.025Q0.225 17.2 0.225 14.575Q0.225 12.55 1.475 10.812Q2.725 9.075 4.725 8.625Q4.75 8.575 4.75 8.412Q4.75 8.25 4.775 8.2L0.675 4.075L2.35 2.425L21.825 21.9Z"/>
    </Icon>
  )
});

export default IconMaterialCloudOffOutlinedW700Filled;
