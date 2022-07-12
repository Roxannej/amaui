import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialComputerRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ComputerRoundedW700Filled'
      short_name='Computer'

      {...props}
    >
      <path d="M4.3 18.85Q3 18.85 2.075 17.925Q1.15 17 1.15 15.7V5.3Q1.15 4 2.075 3.075Q3 2.15 4.3 2.15H19.7Q21 2.15 21.925 3.075Q22.85 4 22.85 5.3V15.7Q22.85 17 21.925 17.925Q21 18.85 19.7 18.85ZM1.425 22.225Q0.925 22.225 0.575 21.875Q0.225 21.525 0.225 21.025Q0.225 20.525 0.575 20.188Q0.925 19.85 1.425 19.85H22.575Q23.075 19.85 23.425 20.188Q23.775 20.525 23.775 21.025Q23.775 21.525 23.425 21.875Q23.075 22.225 22.575 22.225Z"/>
    </Icon>
  )
});

export default IconMaterialComputerRoundedW700Filled;