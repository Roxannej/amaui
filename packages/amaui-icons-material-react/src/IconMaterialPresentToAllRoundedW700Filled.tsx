import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPresentToAllRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PresentToAllRoundedW700Filled'
      short_name='PresentToAll'

      {...props}
    >
      <path d="M12.025 16.525Q12.55 16.525 12.925 16.137Q13.3 15.75 13.3 15.225V12.5L13.8 13Q14.15 13.35 14.675 13.35Q15.2 13.35 15.575 12.975Q15.95 12.6 15.95 12.075Q15.95 11.55 15.575 11.175L13.125 8.75Q12.9 8.525 12.613 8.4Q12.325 8.275 12.025 8.275Q11.725 8.275 11.438 8.4Q11.15 8.525 10.925 8.75L8.45 11.2Q8.1 11.55 8.1 12.075Q8.1 12.6 8.475 12.975Q8.85 13.35 9.363 13.35Q9.875 13.35 10.25 12.975L10.725 12.5V15.225Q10.725 15.75 11.113 16.137Q11.5 16.525 12.025 16.525ZM4.3 20.85Q2.975 20.85 2.062 19.938Q1.15 19.025 1.15 17.7V6.3Q1.15 4.975 2.062 4.062Q2.975 3.15 4.3 3.15H19.7Q21.025 3.15 21.938 4.062Q22.85 4.975 22.85 6.3V17.7Q22.85 19.025 21.938 19.938Q21.025 20.85 19.7 20.85Z"/>
    </Icon>
  )
});

export default IconMaterialPresentToAllRoundedW700Filled;