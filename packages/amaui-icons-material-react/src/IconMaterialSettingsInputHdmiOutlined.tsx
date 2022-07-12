import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSettingsInputHdmiOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsInputHdmiOutlined'
      short_name='SettingsInputHdmi'

      {...props}
    >
      <path d="M8 22V19L5 13V7H6V4Q6 3.175 6.588 2.587Q7.175 2 8 2H16Q16.825 2 17.413 2.587Q18 3.175 18 4V7H19V13L16 19V22ZM8 7H10V5H11V7H13V5H14V7H16V4Q16 4 16 4Q16 4 16 4H8Q8 4 8 4Q8 4 8 4ZM10 20H14V18.5L17 12.5V9H7V12.5L10 18.5ZM12 14.5Z"/>
    </Icon>
  )
});

export default IconMaterialSettingsInputHdmiOutlined;
