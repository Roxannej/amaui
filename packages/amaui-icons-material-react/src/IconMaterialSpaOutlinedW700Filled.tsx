import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSpaOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpaOutlinedW700Filled'
      short_name='Spa'

      {...props}
    >
      <path d="M12.025 22.85Q7.125 22.3 4.237 19.175Q1.35 16.05 1.15 11.025Q4.1 11.225 6.088 11.9Q8.075 12.575 9.338 13.938Q10.6 15.3 11.213 17.462Q11.825 19.625 12.025 22.85ZM15 22.15Q14.875 19.8 14.575 18.113Q14.275 16.425 13.775 15.125Q15.1 13 17.488 11.887Q19.875 10.775 22.825 11.025Q22.6 15.25 20.587 18.087Q18.575 20.925 15 22.15ZM12 12.25Q11.35 11.275 10.15 10.425Q8.95 9.575 7.55 9.1Q7.9 7.175 9.1 4.838Q10.3 2.5 11.975 0.475Q13.7 2.575 14.9 4.875Q16.1 7.175 16.45 9.1Q15.1 9.55 13.925 10.375Q12.75 11.2 12 12.25Z"/>
    </Icon>
  )
});

export default IconMaterialSpaOutlinedW700Filled;
