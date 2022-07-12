import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMonitorRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonitorRoundedW700Filled'
      short_name='Monitor'

      {...props}
    >
      <path d="M7.275 22.225Q6.6 22.225 6.113 21.738Q5.625 21.25 5.625 20.575Q5.625 20.3 5.775 19.925Q5.925 19.55 6.125 19.35L7 18.45H4.3Q2.975 18.45 2.062 17.538Q1.15 16.625 1.15 15.3V5.3Q1.15 3.975 2.062 3.062Q2.975 2.15 4.3 2.15H19.7Q21.025 2.15 21.938 3.062Q22.85 3.975 22.85 5.3V15.3Q22.85 16.625 21.938 17.538Q21.025 18.45 19.7 18.45H17L17.875 19.35Q18.075 19.55 18.225 19.913Q18.375 20.275 18.375 20.575Q18.375 21.25 17.888 21.738Q17.4 22.225 16.725 22.225Z"/>
    </Icon>
  )
});

export default IconMaterialMonitorRoundedW700Filled;
