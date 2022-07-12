import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTabletOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabletOutlinedW700Filled'
      short_name='Tablet'

      {...props}
    >
      <path d="M3.375 20.85Q2.075 20.85 1.15 19.925Q0.225 19 0.225 17.7V6.3Q0.225 5 1.15 4.075Q2.075 3.15 3.375 3.15H20.625Q21.925 3.15 22.85 4.075Q23.775 5 23.775 6.3V17.7Q23.775 19 22.85 19.925Q21.925 20.85 20.625 20.85ZM6.375 17.7H17.625V6.3H6.375Z"/>
    </Icon>
  )
});

export default IconMaterialTabletOutlinedW700Filled;
