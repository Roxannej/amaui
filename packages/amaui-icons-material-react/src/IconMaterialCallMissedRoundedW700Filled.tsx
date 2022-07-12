import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCallMissedRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallMissedRoundedW700Filled'
      short_name='CallMissed'

      {...props}
    >
      <path d="M11.875 17.575Q11.575 17.575 11.288 17.462Q11 17.35 10.775 17.125L5.45 11.8V14Q5.45 14.65 4.988 15.113Q4.525 15.575 3.875 15.575Q3.225 15.575 2.763 15.113Q2.3 14.65 2.3 14V8Q2.3 7.35 2.763 6.887Q3.225 6.425 3.875 6.425H9.875Q10.525 6.425 10.988 6.887Q11.45 7.35 11.45 8Q11.45 8.65 10.988 9.112Q10.525 9.575 9.875 9.575H7.675L11.875 13.8L18.375 7.3Q18.8 6.875 19.488 6.862Q20.175 6.85 20.6 7.3Q21.075 7.75 21.05 8.412Q21.025 9.075 20.575 9.525L12.975 17.125Q12.75 17.35 12.463 17.462Q12.175 17.575 11.875 17.575Z"/>
    </Icon>
  )
});

export default IconMaterialCallMissedRoundedW700Filled;