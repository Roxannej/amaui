import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCropOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropOutlinedW700Filled'
      short_name='Crop'

      {...props}
    >
      <path d="M16.425 14.425V7.575Q16.425 7.575 16.425 7.575Q16.425 7.575 16.425 7.575H9.575V4.425H16.425Q17.75 4.425 18.663 5.337Q19.575 6.25 19.575 7.575V14.425ZM16.425 23.2V19.575H7.575Q6.25 19.575 5.338 18.663Q4.425 17.75 4.425 16.425V7.575H0.8V4.425H4.425V0.8H7.575V16.425Q7.575 16.425 7.575 16.425Q7.575 16.425 7.575 16.425H23.2V19.575H19.575V23.2Z"/>
    </Icon>
  )
});

export default IconMaterialCropOutlinedW700Filled;
