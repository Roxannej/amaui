import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSettingsOverscanRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsOverscanRoundedW700Filled'
      short_name='SettingsOverscan'

      {...props}
    >
      <path d="M9.8 9.375H14.2L12 7.2ZM16.625 14.2 18.8 12 16.625 9.8ZM7.375 14.2V9.8L5.2 12ZM12 16.8 14.2 14.625H9.8ZM4.3 20.85Q2.975 20.85 2.062 19.938Q1.15 19.025 1.15 17.7V6.3Q1.15 4.975 2.062 4.062Q2.975 3.15 4.3 3.15H19.7Q21.025 3.15 21.938 4.062Q22.85 4.975 22.85 6.3V17.7Q22.85 19.025 21.938 19.938Q21.025 20.85 19.7 20.85Z"/>
    </Icon>
  )
});

export default IconMaterialSettingsOverscanRoundedW700Filled;