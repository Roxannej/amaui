import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewDayOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewDayOutlined'
      short_name='ViewDay'

      {...props}
    >
      <path d="M3 20V18H21V20ZM3 6V4H21V6ZM5 16Q4.175 16 3.587 15.412Q3 14.825 3 14V10Q3 9.175 3.587 8.587Q4.175 8 5 8H19Q19.825 8 20.413 8.587Q21 9.175 21 10V14Q21 14.825 20.413 15.412Q19.825 16 19 16ZM5 14H19Q19 14 19 14Q19 14 19 14V10Q19 10 19 10Q19 10 19 10H5Q5 10 5 10Q5 10 5 10V14Q5 14 5 14Q5 14 5 14ZM5 10Q5 10 5 10Q5 10 5 10V14Q5 14 5 14Q5 14 5 14Q5 14 5 14Q5 14 5 14V10Q5 10 5 10Q5 10 5 10Z"/>
    </Icon>
  )
});

export default IconMaterialViewDayOutlined;
