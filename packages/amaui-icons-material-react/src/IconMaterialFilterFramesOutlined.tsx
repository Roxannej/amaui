import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilterFramesOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterFramesOutlined'
      short_name='FilterFrames'

      {...props}
    >
      <path d="M4 22Q3.175 22 2.588 21.413Q2 20.825 2 20V6Q2 5.175 2.588 4.588Q3.175 4 4 4H8L12 0L16 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V20Q22 20.825 21.413 21.413Q20.825 22 20 22ZM4 20H20Q20 20 20 20Q20 20 20 20V6Q20 6 20 6Q20 6 20 6H15.175L12 2.825L8.825 6H4Q4 6 4 6Q4 6 4 6V20Q4 20 4 20Q4 20 4 20ZM6 18V8H18V18ZM8 16V10V16ZM8 16H16V10H8Z"/>
    </Icon>
  )
});

export default IconMaterialFilterFramesOutlined;
