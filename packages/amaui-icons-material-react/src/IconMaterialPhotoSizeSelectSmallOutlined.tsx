import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhotoSizeSelectSmallOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoSizeSelectSmallOutlined'
      short_name='PhotoSizeSelectSmall'

      {...props}
    >
      <path d="M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V11H13V21ZM3 9V7H5V9ZM3 5Q3 4.175 3.587 3.587Q4.175 3 5 3V5ZM4 19H12L9.4 15.5L7.5 18L6.1 16.15ZM7 5V3H9V5ZM11 5V3H13V5ZM15 21V19H17V21ZM15 5V3H17V5ZM19 21V19H21Q21 19.825 20.413 20.413Q19.825 21 19 21ZM19 17V15H21V17ZM19 13V11H21V13ZM19 9V7H21V9ZM19 5V3Q19.825 3 20.413 3.587Q21 4.175 21 5Z"/>
    </Icon>
  )
});

export default IconMaterialPhotoSizeSelectSmallOutlined;
