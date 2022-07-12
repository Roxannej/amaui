import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPivotTableChartOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PivotTableChartOutlined'
      short_name='PivotTableChart'

      {...props}
    >
      <path d="M10 8V3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V8ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V10H8V21ZM3 8V5Q3 4.175 3.587 3.587Q4.175 3 5 3H8V8ZM13 22 9 18 13 14 14.4 15.4 12.85 17H15Q15.825 17 16.413 16.413Q17 15.825 17 15V12.8L15.4 14.4L14 13L18 9L22 13L20.6 14.4L19 12.8V15Q19 16.65 17.825 17.825Q16.65 19 15 19H12.85L14.4 20.6Z"/>
    </Icon>
  )
});

export default IconMaterialPivotTableChartOutlined;