import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPowerInputOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerInputOutlined'
      short_name='PowerInput'

      {...props}
    >
      <path d="M2 11V9H21V11ZM2 15V13H7V15ZM9 15V13H14V15ZM16 15V13H21V15Z"/>
    </Icon>
  )
});

export default IconMaterialPowerInputOutlined;