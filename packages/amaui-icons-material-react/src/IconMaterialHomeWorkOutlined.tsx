import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHomeWorkOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeWorkOutlined'
      short_name='HomeWork'

      {...props}
    >
      <path d="M17 9H19V7H17ZM17 13H19V11H17ZM17 17H19V15H17ZM17 21V19H21V5H12V6.4L10 4.95V3H23V21ZM1 21V11L8 6L15 11V21H9V16H7V21ZM3 19H5V14H11V19H13V12L8 8.5L3 12ZM17 10ZM11 19V14H5V19V14H8H11Z"/>
    </Icon>
  )
});

export default IconMaterialHomeWorkOutlined;