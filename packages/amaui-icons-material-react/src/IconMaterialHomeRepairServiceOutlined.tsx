import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHomeRepairServiceOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeRepairServiceOutlined'
      short_name='HomeRepairService'

      {...props}
    >
      <path d="M2 20V10Q2 9.175 2.588 8.587Q3.175 8 4 8H7V6Q7 5.175 7.588 4.588Q8.175 4 9 4H15Q15.825 4 16.413 4.588Q17 5.175 17 6V8H20Q20.825 8 21.413 8.587Q22 9.175 22 10V20ZM4 18H20V15H18V16H16V15H8V16H6V15H4ZM4 10V13H6V12H8V13H16V12H18V13H20V10Q20 10 20 10Q20 10 20 10H4Q4 10 4 10Q4 10 4 10ZM9 8H15V6Q15 6 15 6Q15 6 15 6H9Q9 6 9 6Q9 6 9 6Z"/>
    </Icon>
  )
});

export default IconMaterialHomeRepairServiceOutlined;
