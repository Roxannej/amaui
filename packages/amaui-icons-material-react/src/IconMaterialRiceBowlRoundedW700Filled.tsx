import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRiceBowlRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RiceBowlRoundedW700Filled'
      short_name='RiceBowl'

      {...props}
    >
      <path d="M7.225 22.775V20.75Q4.525 19.55 2.875 17.225Q1.225 14.9 1.225 12Q1.225 9.775 2.075 7.812Q2.925 5.85 4.388 4.387Q5.85 2.925 7.812 2.075Q9.775 1.225 12 1.225Q14.225 1.225 16.188 2.075Q18.15 2.925 19.613 4.387Q21.075 5.85 21.925 7.812Q22.775 9.775 22.775 12Q22.775 14.9 21.125 17.225Q19.475 19.55 16.775 20.75V22.775ZM10.575 11.425H13.425V4.525Q13.075 4.45 12.725 4.412Q12.375 4.375 12 4.375Q11.625 4.375 11.275 4.412Q10.925 4.45 10.575 4.525ZM4.4 11.425H7.425V5.925Q6.15 6.875 5.338 8.3Q4.525 9.725 4.4 11.425ZM16.575 11.425H19.6Q19.475 9.725 18.663 8.3Q17.85 6.875 16.575 5.925Z"/>
    </Icon>
  )
});

export default IconMaterialRiceBowlRoundedW700Filled;
