import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWindowRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindowRoundedW700'
      short_name='Window'

      {...props}
    >
      <path d="M19.7 22.85H4.3Q2.975 22.85 2.062 21.938Q1.15 21.025 1.15 19.7V4.3Q1.15 2.975 2.062 2.062Q2.975 1.15 4.3 1.15H19.7Q21.025 1.15 21.938 2.062Q22.85 2.975 22.85 4.3V19.7Q22.85 21.025 21.938 21.938Q21.025 22.85 19.7 22.85ZM11 11V4.3H4.3Q4.3 4.3 4.3 4.3Q4.3 4.3 4.3 4.3V11ZM11 13H4.3V19.7Q4.3 19.7 4.3 19.7Q4.3 19.7 4.3 19.7H11ZM13 13V19.7H19.7Q19.7 19.7 19.7 19.7Q19.7 19.7 19.7 19.7V13ZM13 11H19.7V4.3Q19.7 4.3 19.7 4.3Q19.7 4.3 19.7 4.3H13Z"/>
    </Icon>
  )
});

export default IconMaterialWindowRoundedW700;
