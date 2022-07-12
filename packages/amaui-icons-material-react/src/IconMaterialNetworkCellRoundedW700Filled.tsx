import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNetworkCellRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkCellRoundedW700Filled'
      short_name='NetworkCell'

      {...props}
    >
      <path d="M5.025 22Q3.975 22 3.562 21.038Q3.15 20.075 3.9 19.325L20.075 3.15Q20.825 2.4 21.788 2.812Q22.75 3.225 22.75 4.275V20.425Q22.75 21.075 22.288 21.538Q21.825 22 21.175 22ZM16.6 18.85H19.6V8.075L16.6 11.075Z"/>
    </Icon>
  )
});

export default IconMaterialNetworkCellRoundedW700Filled;