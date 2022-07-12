import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChatOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatOutlinedW700'
      short_name='Chat'

      {...props}
    >
      <path d="M6 14H14V12H6ZM6 11H18V9H6ZM6 8H18V6H6ZM1.15 22.85V4.3Q1.15 2.975 2.062 2.062Q2.975 1.15 4.3 1.15H19.7Q21.025 1.15 21.938 2.062Q22.85 2.975 22.85 4.3V15.7Q22.85 17.025 21.938 17.938Q21.025 18.85 19.7 18.85H5.15ZM4.3 15.975 4.575 15.7H19.7Q19.7 15.7 19.7 15.7Q19.7 15.7 19.7 15.7V4.3Q19.7 4.3 19.7 4.3Q19.7 4.3 19.7 4.3H4.3Q4.3 4.3 4.3 4.3Q4.3 4.3 4.3 4.3ZM4.3 4.3Q4.3 4.3 4.3 4.3Q4.3 4.3 4.3 4.3Q4.3 4.3 4.3 4.3Q4.3 4.3 4.3 4.3V15.7Q4.3 15.7 4.3 15.7Q4.3 15.7 4.3 15.7V15.975Z"/>
    </Icon>
  )
});

export default IconMaterialChatOutlinedW700;