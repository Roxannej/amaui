import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShuffleOnOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShuffleOnOutlined'
      short_name='ShuffleOn'

      {...props}
    >
      <path d="M3 23Q2.175 23 1.588 22.413Q1 21.825 1 21V3Q1 2.175 1.588 1.587Q2.175 1 3 1H21Q21.825 1 22.413 1.587Q23 2.175 23 3V21Q23 21.825 22.413 22.413Q21.825 23 21 23ZM9.175 10.575 10.575 9.175 5.4 4 4 5.4ZM14 20H20V14H18V16.55L14.85 13.4L13.425 14.825L16.6 18H14ZM5.4 20 18 7.4V10H20V4H14V6H16.6L4 18.6Z"/>
    </Icon>
  )
});

export default IconMaterialShuffleOnOutlined;