import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStarOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StarOutlined'
      short_name='Star'

      {...props}
    >
      <path d="M5.825 22 8.15 14.4 2 10H9.6L12 2L14.4 10H22L15.85 14.4L18.175 22L12 17.3Z"/>
    </Icon>
  )
});

export default IconMaterialStarOutlined;