import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhotoSizeSelectLargeOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoSizeSelectLargeOutlinedFilled'
      short_name='PhotoSizeSelectLarge'

      {...props}
    >
      <path d="M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V7H17V21ZM5 18H15L11.6 13.5L9 17L7.4 14.85ZM3 5Q3 4.175 3.587 3.587Q4.175 3 5 3V5ZM11 5V3H13V5ZM19 5V3Q19.825 3 20.413 3.587Q21 4.175 21 5ZM7 5V3H9V5ZM19 13V11H21V13ZM19 21V19H21Q21 19.825 20.413 20.413Q19.825 21 19 21ZM19 9V7H21V9ZM19 17V15H21V17ZM15 5V3H17V5Z"/>
    </Icon>
  )
});

export default IconMaterialPhotoSizeSelectLargeOutlinedFilled;
