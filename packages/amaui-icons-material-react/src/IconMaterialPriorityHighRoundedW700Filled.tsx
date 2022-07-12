import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPriorityHighRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PriorityHighRoundedW700Filled'
      short_name='PriorityHigh'

      {...props}
    >
      <path d="M12 22.35Q10.85 22.35 10.038 21.538Q9.225 20.725 9.225 19.575Q9.225 18.425 10.038 17.613Q10.85 16.8 12 16.8Q13.15 16.8 13.963 17.613Q14.775 18.425 14.775 19.575Q14.775 20.725 13.963 21.538Q13.15 22.35 12 22.35ZM12 14.8Q11.025 14.8 10.325 14.1Q9.625 13.4 9.625 12.425V4.225Q9.625 3.25 10.325 2.55Q11.025 1.85 12 1.85Q12.975 1.85 13.675 2.55Q14.375 3.25 14.375 4.225V12.425Q14.375 13.4 13.675 14.1Q12.975 14.8 12 14.8Z"/>
    </Icon>
  )
});

export default IconMaterialPriorityHighRoundedW700Filled;