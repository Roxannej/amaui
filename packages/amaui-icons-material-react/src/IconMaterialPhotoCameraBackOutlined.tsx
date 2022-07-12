import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhotoCameraBackOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoCameraBackOutlined'
      short_name='PhotoCameraBack'

      {...props}
    >
      <path d="M6 17H18L14.25 12L11.25 16L9 13ZM4 21Q3.175 21 2.588 20.413Q2 19.825 2 19V7Q2 6.175 2.588 5.588Q3.175 5 4 5H7.15L9 3H15L16.85 5H20Q20.825 5 21.413 5.588Q22 6.175 22 7V19Q22 19.825 21.413 20.413Q20.825 21 20 21ZM20 19Q20 19 20 19Q20 19 20 19V7Q20 7 20 7Q20 7 20 7H15.95L14.125 5H9.875L8.05 7H4Q4 7 4 7Q4 7 4 7V19Q4 19 4 19Q4 19 4 19ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Z"/>
    </Icon>
  )
});

export default IconMaterialPhotoCameraBackOutlined;
