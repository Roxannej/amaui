import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHomeMiniRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeMiniRoundedW700Filled'
      short_name='HomeMini'

      {...props}
    >
      <path d="M12 4.15Q15.175 4.15 17.263 4.987Q19.35 5.825 20.588 7.025Q21.825 8.225 22.338 9.587Q22.85 10.95 22.85 12H1.15Q1.15 10.95 1.663 9.587Q2.175 8.225 3.413 7.025Q4.65 5.825 6.738 4.987Q8.825 4.15 12 4.15ZM9 19.85Q6.275 19.85 4.188 18.188Q2.1 16.525 1.425 14H22.575Q21.9 16.525 19.812 18.188Q17.725 19.85 15 19.85Z"/>
    </Icon>
  )
});

export default IconMaterialHomeMiniRoundedW700Filled;
