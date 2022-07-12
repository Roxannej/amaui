import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHouseSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HouseSharpW700Filled'
      short_name='House'

      {...props}
    >
      <path d="M4.625 20.375V12.375H1L12 2.5L15.625 5.75V3.625H19.375V9.15L23 12.375H19.375V20.375H14.2V14.575H9.8V20.375ZM9.8 10.675H14.2Q14.2 9.775 13.55 9.15Q12.9 8.525 12 8.525Q11.1 8.525 10.45 9.15Q9.8 9.775 9.8 10.675Z"/>
    </Icon>
  )
});

export default IconMaterialHouseSharpW700Filled;
