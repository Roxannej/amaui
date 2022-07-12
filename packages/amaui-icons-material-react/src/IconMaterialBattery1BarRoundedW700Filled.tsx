import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBattery1BarRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery1BarRoundedW700Filled'
      short_name='Battery1Bar'

      {...props}
    >
      <path d="M7.55 23.15Q6.9 23.15 6.438 22.688Q5.975 22.225 5.975 21.575V4.425Q5.975 3.775 6.438 3.312Q6.9 2.85 7.55 2.85H9.425V2.425Q9.425 1.775 9.888 1.312Q10.35 0.85 11 0.85H13Q13.65 0.85 14.113 1.312Q14.575 1.775 14.575 2.425V2.85H16.45Q17.1 2.85 17.562 3.312Q18.025 3.775 18.025 4.425V21.575Q18.025 22.225 17.562 22.688Q17.1 23.15 16.45 23.15ZM9.125 18H14.875V6H9.125Z"/>
    </Icon>
  )
});

export default IconMaterialBattery1BarRoundedW700Filled;
