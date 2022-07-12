import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDangerousRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DangerousRoundedW100Filled'
      short_name='Dangerous'

      {...props}
    >
      <path d="M9.425 19.7Q9.125 19.7 8.85 19.587Q8.575 19.475 8.35 19.25L4.75 15.65Q4.525 15.425 4.412 15.15Q4.3 14.875 4.3 14.575V9.425Q4.3 9.125 4.412 8.85Q4.525 8.575 4.75 8.35L8.35 4.75Q8.575 4.525 8.85 4.412Q9.125 4.3 9.425 4.3H14.575Q14.875 4.3 15.15 4.412Q15.425 4.525 15.65 4.75L19.25 8.35Q19.475 8.575 19.588 8.85Q19.7 9.125 19.7 9.425V14.575Q19.7 14.875 19.588 15.15Q19.475 15.425 19.25 15.65L15.65 19.25Q15.425 19.475 15.15 19.587Q14.875 19.7 14.575 19.7ZM12 12.5 14.625 15.125Q14.725 15.225 14.85 15.225Q14.975 15.225 15.1 15.1Q15.225 14.975 15.225 14.85Q15.225 14.725 15.1 14.6L12.5 12L15.125 9.375Q15.225 9.275 15.225 9.15Q15.225 9.025 15.1 8.9Q14.975 8.775 14.85 8.775Q14.725 8.775 14.6 8.9L12 11.5L9.375 8.875Q9.275 8.775 9.15 8.775Q9.025 8.775 8.9 8.9Q8.775 9.025 8.775 9.15Q8.775 9.275 8.9 9.4L11.5 12L8.875 14.625Q8.775 14.725 8.775 14.85Q8.775 14.975 8.9 15.1Q9.025 15.225 9.15 15.225Q9.275 15.225 9.4 15.1Z"/>
    </Icon>
  )
});

export default IconMaterialDangerousRoundedW100Filled;
