import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialComputerOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ComputerOutlinedW700Filled'
      short_name='Computer'

      {...props}
    >
      <path d="M4.3 18.85Q2.975 18.85 2.062 17.938Q1.15 17.025 1.15 15.7V5.3Q1.15 3.975 2.062 3.062Q2.975 2.15 4.3 2.15H19.7Q21.025 2.15 21.938 3.062Q22.85 3.975 22.85 5.3V15.7Q22.85 17.025 21.938 17.938Q21.025 18.85 19.7 18.85ZM1.425 22.225Q0.925 22.225 0.575 21.875Q0.225 21.525 0.225 21.025Q0.225 20.525 0.575 20.188Q0.925 19.85 1.425 19.85H22.575Q23.075 19.85 23.425 20.188Q23.775 20.525 23.775 21.025Q23.775 21.525 23.425 21.875Q23.075 22.225 22.575 22.225Z"/>
    </Icon>
  )
});

export default IconMaterialComputerOutlinedW700Filled;