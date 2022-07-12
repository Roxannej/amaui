import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSearchOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SearchOutlinedW700Filled'
      short_name='Search'

      {...props}
    >
      <path d="M19.55 21.95 13.075 15.475Q12.35 15.975 11.388 16.275Q10.425 16.575 9.3 16.575Q6.35 16.575 4.288 14.512Q2.225 12.45 2.225 9.5Q2.225 6.55 4.288 4.487Q6.35 2.425 9.3 2.425Q12.25 2.425 14.312 4.487Q16.375 6.55 16.375 9.5Q16.375 10.65 16.075 11.587Q15.775 12.525 15.275 13.225L21.775 19.75ZM9.3 13.425Q10.95 13.425 12.088 12.287Q13.225 11.15 13.225 9.5Q13.225 7.85 12.088 6.712Q10.95 5.575 9.3 5.575Q7.65 5.575 6.513 6.712Q5.375 7.85 5.375 9.5Q5.375 11.15 6.513 12.287Q7.65 13.425 9.3 13.425Z"/>
    </Icon>
  )
});

export default IconMaterialSearchOutlinedW700Filled;