import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoSimSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoSimSharpW700Filled'
      short_name='NoSim'

      {...props}
    >
      <path d="M20.85 17.025 7.3 3.5 9.65 1.15H20.85ZM21.5 23.825 19.725 22.075V22.85H3.15V7.65L4.225 6.6L0.175 2.55L1.825 0.875L23.175 22.15Z"/>
    </Icon>
  )
});

export default IconMaterialNoSimSharpW700Filled;
