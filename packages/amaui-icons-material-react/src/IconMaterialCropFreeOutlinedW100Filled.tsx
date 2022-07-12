import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCropFreeOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropFreeOutlinedW100Filled'
      short_name='CropFree'

      {...props}
    >
      <path d="M4.3 9V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H9V5H5.8Q5.5 5 5.25 5.25Q5 5.5 5 5.8V9ZM9 19.7H5.8Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V15H5V18.2Q5 18.5 5.25 18.75Q5.5 19 5.8 19H9ZM15 19.7V19H18.2Q18.5 19 18.75 18.75Q19 18.5 19 18.2V15H19.7V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7ZM19 9V5.8Q19 5.5 18.75 5.25Q18.5 5 18.2 5H15V4.3H18.2Q18.85 4.3 19.275 4.725Q19.7 5.15 19.7 5.8V9Z"/>
    </Icon>
  )
});

export default IconMaterialCropFreeOutlinedW100Filled;
