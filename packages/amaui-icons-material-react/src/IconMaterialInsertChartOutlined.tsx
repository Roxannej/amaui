import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialInsertChartOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='InsertChartOutlined'
      short_name='InsertChart'

      {...props}
    >
      <path d="M7 17H9V10H7ZM11 17H13V7H11ZM15 17H17V13H15ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM5 19H19Q19 19 19 19Q19 19 19 19V5Q19 5 19 5Q19 5 19 5H5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19ZM5 19Q5 19 5 19Q5 19 5 19V5Q5 5 5 5Q5 5 5 5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19Z"/>
    </Icon>
  )
});

export default IconMaterialInsertChartOutlined;