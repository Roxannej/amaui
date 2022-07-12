import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNearbyOffOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearbyOffOutlined'
      short_name='NearbyOff'

      {...props}
    >
      <path d="M18.8 16 17 14.2 19.2 12Q19.2 12 19.2 12Q19.2 12 19.2 12L12 4.8Q12 4.8 12 4.8Q12 4.8 12 4.8L9.8 7L8 5.2L10.55 2.65Q11.15 2.05 11.988 2.037Q12.825 2.025 13.425 2.625L21.4 10.6Q22 11.175 22 11.987Q22 12.8 21.4 13.4ZM19.825 22.575 16.05 18.8 13.4 21.4Q12.8 21.975 12 21.988Q11.2 22 10.6 21.4L2.625 13.425Q2.025 12.825 2.025 12.025Q2.025 11.225 2.625 10.625L5.2 8.025L1.4 4.2L2.8 2.8L21.2 21.2ZM4.825 12.025 12 19.2Q12 19.2 12 19.2Q12 19.2 12 19.2L14.25 17L12.825 15.575L12 16.4L7.625 12.025L8.45 11.2L7.05 9.8L4.825 12.025Q4.825 12.025 4.825 12.025Q4.825 12.025 4.825 12.025ZM15.6 12.8 11.2 8.4 12 7.6 16.4 12Z"/>
    </Icon>
  )
});

export default IconMaterialNearbyOffOutlined;
