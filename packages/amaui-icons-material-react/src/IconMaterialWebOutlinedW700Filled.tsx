import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWebOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WebOutlinedW700Filled'
      short_name='Web'

      {...props}
    >
      <path d="M4.3 20.85Q2.975 20.85 2.062 19.938Q1.15 19.025 1.15 17.7V6.3Q1.15 4.975 2.062 4.062Q2.975 3.15 4.3 3.15H19.7Q21.025 3.15 21.938 4.062Q22.85 4.975 22.85 6.3V17.7Q22.85 19.025 21.938 19.938Q21.025 20.85 19.7 20.85ZM4.3 12.2H14.2V8.7H4.3ZM14.2 17.7V14.2H4.3V17.7Q4.3 17.7 4.3 17.7Q4.3 17.7 4.3 17.7ZM16.2 17.7H19.7Q19.7 17.7 19.7 17.7Q19.7 17.7 19.7 17.7V8.7H16.2Z"/>
    </Icon>
  )
});

export default IconMaterialWebOutlinedW700Filled;