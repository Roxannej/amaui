import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCloudOffRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloudOffRoundedW700Filled'
      short_name='CloudOff'

      {...props}
    >
      <path d="M19.3 22.725 17.425 20.85H6.5Q3.875 20.85 2.05 19.025Q0.225 17.2 0.225 14.575Q0.225 12.55 1.475 10.812Q2.725 9.075 4.725 8.625Q4.75 8.575 4.75 8.412Q4.75 8.25 4.775 8.2L1.5 4.925Q1.15 4.575 1.15 4.087Q1.15 3.6 1.5 3.25Q1.85 2.9 2.338 2.9Q2.825 2.9 3.175 3.25L20.975 21.05Q21.325 21.4 21.325 21.887Q21.325 22.375 20.975 22.725Q20.625 23.075 20.138 23.075Q19.65 23.075 19.3 22.725ZM22.125 19.375 7.525 4.775Q8.4 4.075 9.6 3.687Q10.8 3.3 12 3.3Q15.05 3.3 17.25 5.375Q19.45 7.45 19.725 10.475Q21.525 10.95 22.65 12.375Q23.775 13.8 23.775 15.65Q23.775 16.775 23.288 17.788Q22.8 18.8 22.125 19.375Z"/>
    </Icon>
  )
});

export default IconMaterialCloudOffRoundedW700Filled;
