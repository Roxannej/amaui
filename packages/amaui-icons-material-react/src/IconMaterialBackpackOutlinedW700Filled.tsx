import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBackpackOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackpackOutlinedW700Filled'
      short_name='Backpack'

      {...props}
    >
      <path d="M5.8 23.35Q4.5 23.35 3.575 22.425Q2.65 21.5 2.65 20.2V7.225Q2.65 5.725 3.475 4.537Q4.3 3.35 5.65 2.95V0.65H9.8V2.65H14.2V0.65H18.35V2.95Q19.7 3.35 20.525 4.537Q21.35 5.725 21.35 7.225V20.2Q21.35 21.5 20.425 22.425Q19.5 23.35 18.2 23.35ZM13.925 16.2H16.3V11.8H7.7V14.2H13.925Z"/>
    </Icon>
  )
});

export default IconMaterialBackpackOutlinedW700Filled;