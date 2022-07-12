import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVibrationSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VibrationSharpW700'
      short_name='Vibration'

      {...props}
    >
      <path d="M0 15V9H2V15ZM3 17V7H5V17ZM22 15V9H24V15ZM19 17V7H21V17ZM6 21V3H18V21ZM9.15 17.85H14.85V6.15H9.15ZM9.15 6.15V17.85Z"/>
    </Icon>
  )
});

export default IconMaterialVibrationSharpW700;