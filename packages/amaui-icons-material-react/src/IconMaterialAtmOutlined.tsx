import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAtmOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AtmOutlined'
      short_name='Atm'

      {...props}
    >
      <path d="M10.375 15V10.5H8.125V9H14.125V10.5H11.875V15ZM2 15V10Q2 9.575 2.288 9.287Q2.575 9 3 9H6Q6.425 9 6.713 9.287Q7 9.575 7 10V15H5.5V13.5H3.5V15ZM3.5 12H5.5V10.5H3.5ZM15.5 15V10Q15.5 9.575 15.787 9.287Q16.075 9 16.5 9H21Q21.425 9 21.712 9.287Q22 9.575 22 10V15H20.5V10.5H19.5V14H18V10.5H17V15Z"/>
    </Icon>
  )
});

export default IconMaterialAtmOutlined;
