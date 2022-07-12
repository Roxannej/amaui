import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVillaOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VillaOutlinedW700Filled'
      short_name='Villa'

      {...props}
    >
      <path d="M8.625 21.375V11.625H16.625Q16.625 10.65 17.325 9.938Q18.025 9.225 19 9.225Q19.975 9.225 20.675 9.938Q21.375 10.65 21.375 11.625V21.375H16.375V15.625H13.625V21.375ZM2.625 21.375V7.55L16.375 2.275V9.625H6.625V21.375Z"/>
    </Icon>
  )
});

export default IconMaterialVillaOutlinedW700Filled;
