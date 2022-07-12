import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCropOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropOutlinedFilled'
      short_name='Crop'

      {...props}
    >
      <path d="M17 15V7Q17 7 17 7Q17 7 17 7H9V5H17Q17.825 5 18.413 5.588Q19 6.175 19 7V15ZM17 23V19H7Q6.175 19 5.588 18.413Q5 17.825 5 17V7H1V5H5V1H7V17Q7 17 7 17Q7 17 7 17H23V19H19V23Z"/>
    </Icon>
  )
});

export default IconMaterialCropOutlinedFilled;
