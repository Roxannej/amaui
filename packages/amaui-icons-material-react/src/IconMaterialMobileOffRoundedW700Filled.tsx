import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMobileOffRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileOffRoundedW700Filled'
      short_name='MobileOff'

      {...props}
    >
      <path d="M20.45 23 0.8 3.375Q0.45 3.025 0.45 2.55Q0.45 2.075 0.8 1.725Q1.15 1.375 1.65 1.375Q2.15 1.375 2.5 1.725L22.1 21.35Q22.45 21.7 22.45 22.175Q22.45 22.65 22.1 23Q21.75 23.35 21.275 23.35Q20.8 23.35 20.45 23ZM4.225 5.15 7.375 8.3V17.625H16.725L19.775 20.675Q19.775 21.975 18.85 22.875Q17.925 23.775 16.625 23.775H7.375Q6.05 23.775 5.138 22.862Q4.225 21.95 4.225 20.625ZM19.775 3.375V16.15L16.625 13V6.375H9.95L5.1 1.55Q5.475 0.9 6.125 0.562Q6.775 0.225 7.5 0.225H16.625Q17.95 0.225 18.863 1.137Q19.775 2.05 19.775 3.375Z"/>
    </Icon>
  )
});

export default IconMaterialMobileOffRoundedW700Filled;
