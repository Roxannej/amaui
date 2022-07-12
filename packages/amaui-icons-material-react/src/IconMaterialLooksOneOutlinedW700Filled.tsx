import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLooksOneOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LooksOneOutlinedW700Filled'
      short_name='LooksOne'

      {...props}
    >
      <path d="M11.625 17H14V7H9.625V9.375H11.625ZM5.3 21.85Q3.975 21.85 3.062 20.938Q2.15 20.025 2.15 18.7V5.3Q2.15 3.975 3.062 3.062Q3.975 2.15 5.3 2.15H18.7Q20.025 2.15 20.938 3.062Q21.85 3.975 21.85 5.3V18.7Q21.85 20.025 20.938 20.938Q20.025 21.85 18.7 21.85Z"/>
    </Icon>
  )
});

export default IconMaterialLooksOneOutlinedW700Filled;