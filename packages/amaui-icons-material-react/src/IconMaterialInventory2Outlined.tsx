import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialInventory2Outlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Inventory2Outlined'
      short_name='Inventory2'

      {...props}
    >
      <path d="M3 20V8.7Q2.575 8.425 2.288 8Q2 7.575 2 7V4Q2 3.175 2.588 2.587Q3.175 2 4 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V7Q22 7.575 21.712 8Q21.425 8.425 21 8.7V20Q21 20.825 20.413 21.413Q19.825 22 19 22H5Q4.175 22 3.587 21.413Q3 20.825 3 20ZM5 9V20Q5 20 5 20Q5 20 5 20H19Q19 20 19 20Q19 20 19 20V9ZM20 7Q20 7 20 7Q20 7 20 7V4Q20 4 20 4Q20 4 20 4H4Q4 4 4 4Q4 4 4 4V7Q4 7 4 7Q4 7 4 7ZM9 14H15V12H9ZM5 20Q5 20 5 20Q5 20 5 20V9V20Q5 20 5 20Q5 20 5 20Z"/>
    </Icon>
  )
});

export default IconMaterialInventory2Outlined;
