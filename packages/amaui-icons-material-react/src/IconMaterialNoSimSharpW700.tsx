import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoSimSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoSimSharpW700'
      short_name='NoSim'

      {...props}
    >
      <path d="M20.85 17.025 17.7 13.875V4.3H10.975L9.55 5.725L7.3 3.5L9.65 1.15H20.85ZM21.5 23.825 19.725 22.075V22.85H3.15V7.65L4.225 6.6L0.175 2.55L1.825 0.875L23.175 22.15ZM6.45 8.825 6.3 8.95V19.7H17.3ZM13.725 9.875ZM11.95 14.35Z"/>
    </Icon>
  )
});

export default IconMaterialNoSimSharpW700;
