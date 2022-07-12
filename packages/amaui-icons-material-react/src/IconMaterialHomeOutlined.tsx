import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHomeOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeOutlined'
      short_name='Home'

      {...props}
    >
      <path d="M4 21V9L12 3L20 9V21H14V14H10V21ZM6 19H8V12H16V19H18V10L12 5.5L6 10ZM12 12.25Z"/>
    </Icon>
  )
});

export default IconMaterialHomeOutlined;
