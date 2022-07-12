import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVibrationOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VibrationOutlined'
      short_name='Vibration'

      {...props}
    >
      <path d="M0 15V9H2V15ZM3 17V7H5V17ZM22 15V9H24V15ZM19 17V7H21V17ZM8 21Q7.175 21 6.588 20.413Q6 19.825 6 19V5Q6 4.175 6.588 3.587Q7.175 3 8 3H16Q16.825 3 17.413 3.587Q18 4.175 18 5V19Q18 19.825 17.413 20.413Q16.825 21 16 21ZM8 19H16Q16 19 16 19Q16 19 16 19V5Q16 5 16 5Q16 5 16 5H8Q8 5 8 5Q8 5 8 5V19Q8 19 8 19Q8 19 8 19ZM8 19Q8 19 8 19Q8 19 8 19V5Q8 5 8 5Q8 5 8 5Q8 5 8 5Q8 5 8 5V19Q8 19 8 19Q8 19 8 19Z"/>
    </Icon>
  )
});

export default IconMaterialVibrationOutlined;
