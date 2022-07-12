import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBattery30RoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery30RoundedW700'
      short_name='Battery30'

      {...props}
    >
      <path d="M7.725 22.85Q7.05 22.85 6.6 22.4Q6.15 21.95 6.15 21.275V4.725Q6.15 4.05 6.6 3.6Q7.05 3.15 7.725 3.15H9.15V2.725Q9.15 2.075 9.613 1.612Q10.075 1.15 10.725 1.15H13.275Q13.925 1.15 14.388 1.612Q14.85 2.075 14.85 2.725V3.15H16.275Q16.95 3.15 17.4 3.6Q17.85 4.05 17.85 4.725V21.275Q17.85 21.95 17.4 22.4Q16.95 22.85 16.275 22.85Z"/>
    </Icon>
  )
});

export default IconMaterialBattery30RoundedW700;