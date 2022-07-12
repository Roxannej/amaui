import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLowPrioritySharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LowPrioritySharpW700'
      short_name='LowPriority'

      {...props}
    >
      <path d="M23.425 4.425V7.575H14.275V4.425ZM23.425 9.925V13.075H14.275V9.925ZM23.425 15.425V18.575H14.275V15.425ZM12.275 4.425V7.575H7.625Q5.975 7.575 4.838 8.712Q3.7 9.85 3.7 11.5Q3.7 13.125 4.787 14.25Q5.875 15.375 7.325 15.425H7.35L6.05 14.125L7.725 12.45L12.275 17L7.725 21.55L6.05 19.875L7.35 18.575Q4.575 18.525 2.562 16.475Q0.55 14.425 0.55 11.5Q0.55 8.55 2.612 6.487Q4.675 4.425 7.625 4.425Z"/>
    </Icon>
  )
});

export default IconMaterialLowPrioritySharpW700;
