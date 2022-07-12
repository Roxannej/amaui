import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddPhotoAlternateOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddPhotoAlternateOutlined'
      short_name='AddPhotoAlternate'

      {...props}
    >
      <path d="M14 3V5H5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19H19Q19 19 19 19Q19 19 19 19V10H21V19Q21 19.825 20.413 20.413Q19.825 21 19 21H5Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3ZM19 3V5H21V7H19V9H17V7H15V5H17V3ZM6 17H18L14.25 12L11.25 16L9 13ZM5 5V8V10V19Q5 19 5 19Q5 19 5 19Q5 19 5 19Q5 19 5 19V5Q5 5 5 5Q5 5 5 5Z"/>
    </Icon>
  )
});

export default IconMaterialAddPhotoAlternateOutlined;
