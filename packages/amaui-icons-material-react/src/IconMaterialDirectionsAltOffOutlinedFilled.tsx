import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDirectionsAltOffOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsAltOffOutlinedFilled'
      short_name='DirectionsAltOff'

      {...props}
    >
      <path d="M20.475 23.3 16 18.8l-2.6 2.6q-.3.3-.662.45-.363.15-.738.15t-.738-.15q-.362-.15-.662-.45l-8-8q-.3-.3-.45-.662Q2 12.375 2 12t.15-.738q.15-.362.45-.662L5.2 8 .675 3.5 2.1 2.075l19.8 19.8ZM12 17l1.1-1.1-1.425-1.4-1.075 1.1Zm6.85-1.05-2.9-2.9L17 12l-5-5-1.05 1.05-2.9-2.9L10.6 2.6q.3-.3.662-.45Q11.625 2 12 2t.738.15q.362.15.662.45l8 8q.3.3.45.662.15.363.15.738t-.15.738q-.15.362-.45.662ZM7 13h3.175l-2-2H7Z"/>
    </Icon>
  )
});

export default IconMaterialDirectionsAltOffOutlinedFilled;
