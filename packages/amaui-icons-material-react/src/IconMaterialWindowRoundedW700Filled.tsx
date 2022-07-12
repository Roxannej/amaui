import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWindowRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindowRoundedW700Filled'
      short_name='Window'

      {...props}
    >
      <path d="M13 11V1.15H19.7Q21.025 1.15 21.938 2.062Q22.85 2.975 22.85 4.3V11ZM13 22.85V13H22.85V19.7Q22.85 21.025 21.938 21.938Q21.025 22.85 19.7 22.85ZM1.15 11V4.3Q1.15 2.975 2.062 2.062Q2.975 1.15 4.3 1.15H11V11ZM4.3 22.85Q2.975 22.85 2.062 21.938Q1.15 21.025 1.15 19.7V13H11V22.85Z"/>
    </Icon>
  )
});

export default IconMaterialWindowRoundedW700Filled;
