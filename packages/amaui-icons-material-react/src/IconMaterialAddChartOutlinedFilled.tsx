import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddChartOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddChartOutlinedFilled'
      short_name='AddChart'

      {...props}
    >
      <path d="M7 17H9V10H7ZM11 17H13V7H11ZM15 17H17V13H15ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H14V5H5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19H19Q19 19 19 19Q19 19 19 19V10H21V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM17 9V7H15V5H17V3H19V5H21V7H19V9Z"/>
    </Icon>
  )
});

export default IconMaterialAddChartOutlinedFilled;