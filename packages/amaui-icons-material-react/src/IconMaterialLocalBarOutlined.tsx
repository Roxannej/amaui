import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocalBarOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalBarOutlined'
      short_name='LocalBar'

      {...props}
    >
      <path d="M6 21V19H11V14L3 5V3H21V5L13 14V19H18V21ZM7.45 7H16.55L18.35 5H5.65ZM12 12.1 14.775 9H9.225ZM12 12.1Z"/>
    </Icon>
  )
});

export default IconMaterialLocalBarOutlined;
