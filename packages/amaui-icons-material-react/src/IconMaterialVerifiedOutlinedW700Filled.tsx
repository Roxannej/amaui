import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVerifiedOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerifiedOutlinedW700Filled'
      short_name='Verified'

      {...props}
    >
      <path d="M8.25 23.575 6.175 20.025 2.175 19.15 2.575 15.075 -0.1 12 2.575 8.925 2.175 4.85 6.175 3.975 8.25 0.425 12 2.025 15.75 0.425 17.825 3.975 21.825 4.85 21.425 8.925 24.1 12 21.425 15.075 21.825 19.15 17.825 20.025 15.75 23.575 12 21.975ZM10.95 15.825 16.875 9.9 15.175 8.2 10.95 12.425 8.825 10.3 7.125 12Z"/>
    </Icon>
  )
});

export default IconMaterialVerifiedOutlinedW700Filled;
