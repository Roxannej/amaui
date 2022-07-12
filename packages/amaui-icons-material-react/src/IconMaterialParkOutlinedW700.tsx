import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialParkOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ParkOutlinedW700'
      short_name='Park'

      {...props}
    >
      <path d="M14.375 22.85H9.625V18.85H1.425L5.425 12.85H3.4L12 0.55L20.6 12.85H18.575L22.575 18.85H14.375ZM7.325 15.7H11.325H9.425H12H14.575H12.675H16.675ZM7.325 15.7H16.675L12.675 9.7H14.575L12 6.025L9.425 9.7H11.325Z"/>
    </Icon>
  )
});

export default IconMaterialParkOutlinedW700;