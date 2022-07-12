import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoSimOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoSimOutlinedW700Filled'
      short_name='NoSim'

      {...props}
    >
      <path d="M20.85 17.025 7.3 3.5 9.65 1.15H17.7Q19.025 1.15 19.938 2.062Q20.85 2.975 20.85 4.3ZM21.5 23.825 19.725 22.075Q19.3 22.45 18.812 22.65Q18.325 22.85 17.7 22.85H6.3Q4.975 22.85 4.062 21.938Q3.15 21.025 3.15 19.7V7.65L4.225 6.6L0.175 2.55L1.825 0.875L23.175 22.15Z"/>
    </Icon>
  )
});

export default IconMaterialNoSimOutlinedW700Filled;