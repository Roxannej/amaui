import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPackageOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PackageOutlined'
      short_name='Package'

      {...props}
    >
      <path d="m10 9.75 2-1 2 1V5h-4ZM7 17v-2h5v2Zm-2 4q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21ZM5 5v14V5Zm0 14h14V5h-3v8l-4-2-4 2V5H5v14Z"/>
    </Icon>
  )
});

export default IconMaterialPackageOutlined;
