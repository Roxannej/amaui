import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCropOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropOutlinedW100Filled'
      short_name='Crop'

      {...props}
    >
      <path d="M17.65 16.95V7.15Q17.65 6.85 17.4 6.6Q17.15 6.35 16.85 6.35H7.05V5.65H16.85Q17.5 5.65 17.925 6.075Q18.35 6.5 18.35 7.15V16.95ZM17.65 22.35V18.35H7.15Q6.5 18.35 6.075 17.925Q5.65 17.5 5.65 16.85V6.35H1.65V5.65H5.65V1.65H6.35V16.85Q6.35 17.15 6.6 17.4Q6.85 17.65 7.15 17.65H22.35V18.35H18.35V22.35Z"/>
    </Icon>
  )
});

export default IconMaterialCropOutlinedW100Filled;
