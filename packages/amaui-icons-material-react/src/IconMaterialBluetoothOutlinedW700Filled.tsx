import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBluetoothOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BluetoothOutlinedW700Filled'
      short_name='Bluetooth'

      {...props}
    >
      <path d="M10.8 22.2V14.85L6.4 19.275L4.725 17.6L10.325 12L4.725 6.4L6.4 4.725L10.8 9.15V1.8H12.075L17.975 7.7L13.675 12L17.975 16.3L12.075 22.2ZM13.2 9.15 14.625 7.7 13.2 6.3ZM13.2 17.7 14.625 16.3 13.2 14.85Z"/>
    </Icon>
  )
});

export default IconMaterialBluetoothOutlinedW700Filled;