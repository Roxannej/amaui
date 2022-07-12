import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVibrationOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VibrationOutlinedW700Filled'
      short_name='Vibration'

      {...props}
    >
      <path d="M0 15V9H2V15ZM3 17V7H5V17ZM22 15V9H24V15ZM19 17V7H21V17ZM9.15 21Q7.825 21 6.912 20.087Q6 19.175 6 17.85V6.15Q6 4.825 6.912 3.912Q7.825 3 9.15 3H14.85Q16.175 3 17.087 3.912Q18 4.825 18 6.15V17.85Q18 19.175 17.087 20.087Q16.175 21 14.85 21Z"/>
    </Icon>
  )
});

export default IconMaterialVibrationOutlinedW700Filled;
