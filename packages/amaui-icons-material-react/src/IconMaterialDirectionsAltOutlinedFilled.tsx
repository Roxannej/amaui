import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDirectionsAltOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsAltOutlinedFilled'
      short_name='DirectionsAlt'

      {...props}
    >
      <path d="M12 22q-.375 0-.738-.15-.362-.15-.662-.45l-8-8q-.3-.3-.45-.662Q2 12.375 2 12t.15-.738q.15-.362.45-.662l8-8q.3-.3.662-.45Q11.625 2 12 2t.738.15q.362.15.662.45l8 8q.3.3.45.662.15.363.15.738t-.15.738q-.15.362-.45.662l-8 8q-.3.3-.662.45-.363.15-.738.15Zm0-5 5-5-5-5-1.4 1.4 2.55 2.6H7v2h6.15l-2.55 2.6Z"/>
    </Icon>
  )
});

export default IconMaterialDirectionsAltOutlinedFilled;
