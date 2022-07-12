import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLandscapeOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LandscapeOutlinedW700Filled'
      short_name='Landscape'

      {...props}
    >
      <path d="M0.225 18.375 7 9.35 11.425 15.225H13.9L10.25 10.35L14 5.35L23.775 18.375Z"/>
    </Icon>
  )
});

export default IconMaterialLandscapeOutlinedW700Filled;