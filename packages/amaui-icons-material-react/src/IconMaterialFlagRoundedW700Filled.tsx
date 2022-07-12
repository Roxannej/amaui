import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlagRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlagRoundedW700Filled'
      short_name='Flag'

      {...props}
    >
      <path d="M5.725 21.85Q5.075 21.85 4.613 21.388Q4.15 20.925 4.15 20.275V4.725Q4.15 4.075 4.613 3.612Q5.075 3.15 5.725 3.15H13.4Q13.975 3.15 14.388 3.512Q14.8 3.875 14.925 4.425L15.1 5.15H19.275Q19.925 5.15 20.388 5.612Q20.85 6.075 20.85 6.725V15.275Q20.85 15.925 20.388 16.387Q19.925 16.85 19.275 16.85H13.6Q13.025 16.85 12.613 16.488Q12.2 16.125 12.075 15.575L11.9 14.85H7.3V20.275Q7.3 20.925 6.838 21.388Q6.375 21.85 5.725 21.85Z"/>
    </Icon>
  )
});

export default IconMaterialFlagRoundedW700Filled;
