import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPowerRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerRoundedW700Filled'
      short_name='Power'

      {...props}
    >
      <path d="M8.35 18.05 6.075 15.775Q5.65 15.35 5.4 14.762Q5.15 14.175 5.15 13.55V9.3Q5.15 8.15 5.775 7.287Q6.4 6.425 7.5 6.225V6.15V3.725Q7.5 3.075 7.963 2.612Q8.425 2.15 9.075 2.15Q9.725 2.15 10.188 2.612Q10.65 3.075 10.65 3.725V6.15H13.35V3.725Q13.35 3.075 13.812 2.612Q14.275 2.15 14.925 2.15Q15.575 2.15 16.038 2.612Q16.5 3.075 16.5 3.725V6.15V6.225Q17.6 6.425 18.225 7.275Q18.85 8.125 18.85 9.3V13.55Q18.85 14.175 18.6 14.762Q18.35 15.35 17.925 15.775L15.65 18.05V20.275Q15.65 20.925 15.188 21.388Q14.725 21.85 14.075 21.85H9.925Q9.275 21.85 8.812 21.388Q8.35 20.925 8.35 20.275Z"/>
    </Icon>
  )
});

export default IconMaterialPowerRoundedW700Filled;
