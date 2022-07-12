import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHardwareOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HardwareOutlinedW100'
      short_name='Hardware'

      {...props}
    >
      <path d="M11.35 19.7Q11.075 19.7 10.863 19.487Q10.65 19.275 10.65 19V6.7H6.4Q6.775 5.6 7.725 4.95Q8.675 4.3 9.85 4.3H14.05V7.15L16.9 4.3H17.6V10.7H16.9L14.05 7.85V19Q14.05 19.275 13.838 19.487Q13.625 19.7 13.35 19.7ZM11.35 19H13.35V12.375H12.35H11.35ZM11.35 11.65H13.35V5H9.85Q9.2 5 8.613 5.25Q8.025 5.5 7.6 6H11.35ZM12.35 12Q12.35 12 12.35 12Q12.35 12 12.35 12Z"/>
    </Icon>
  )
});

export default IconMaterialHardwareOutlinedW100;
