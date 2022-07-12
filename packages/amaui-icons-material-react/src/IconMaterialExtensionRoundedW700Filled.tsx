import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExtensionRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExtensionRoundedW700Filled'
      short_name='Extension'

      {...props}
    >
      <path d="M5 21.85Q3.8 21.85 2.975 21.025Q2.15 20.2 2.15 19V14.75Q3.1 14.75 3.75 14.1Q4.4 13.45 4.4 12.5Q4.4 11.55 3.75 10.9Q3.1 10.25 2.15 10.25V6Q2.15 4.8 2.975 3.975Q3.8 3.15 5 3.15H8.275Q8.55 2 9.438 1.237Q10.325 0.475 11.5 0.475Q12.675 0.475 13.562 1.237Q14.45 2 14.725 3.15H18Q19.2 3.15 20.025 3.975Q20.85 4.8 20.85 6V9.275Q22 9.55 22.763 10.438Q23.525 11.325 23.525 12.5Q23.525 13.675 22.763 14.562Q22 15.45 20.85 15.725V19Q20.85 20.2 20.025 21.025Q19.2 21.85 18 21.85H13.75Q13.75 20.9 13.1 20.25Q12.45 19.6 11.5 19.6Q10.55 19.6 9.9 20.25Q9.25 20.9 9.25 21.85Z"/>
    </Icon>
  )
});

export default IconMaterialExtensionRoundedW700Filled;
