import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEventBusyOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventBusyOutlined'
      short_name='EventBusy'

      {...props}
    >
      <path d="M9.7 18.7 8.3 17.3 10.6 15 8.3 12.7 9.7 11.3 12 13.6 14.3 11.3 15.7 12.7 13.4 15 15.7 17.3 14.3 18.7 12 16.4ZM5 22Q4.175 22 3.587 21.413Q3 20.825 3 20V6Q3 5.175 3.587 4.588Q4.175 4 5 4H6V2H8V4H16V2H18V4H19Q19.825 4 20.413 4.588Q21 5.175 21 6V20Q21 20.825 20.413 21.413Q19.825 22 19 22ZM5 20H19Q19 20 19 20Q19 20 19 20V10H5V20Q5 20 5 20Q5 20 5 20ZM5 8H19V6Q19 6 19 6Q19 6 19 6H5Q5 6 5 6Q5 6 5 6ZM5 8V6Q5 6 5 6Q5 6 5 6Q5 6 5 6Q5 6 5 6V8Z"/>
    </Icon>
  )
});

export default IconMaterialEventBusyOutlined;