import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDirectionsAltOffOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsAltOffOutlined'
      short_name='DirectionsAltOff'

      {...props}
    >
      <path d="M20.475 23.3 16 18.8l-2.6 2.6q-.3.3-.662.45-.363.15-.738.15t-.738-.15q-.362-.15-.662-.45l-8-8q-.3-.3-.45-.662Q2 12.375 2 12t.15-.738q.15-.362.45-.662L5.2 8 .675 3.5 2.1 2.075l19.8 19.8ZM14.6 17.4l-1.5-1.5L12 17l-1.4-1.4 1.075-1.1-1.5-1.5H7v-2h1.175L6.6 9.4 4 12l8 8Zm4.25-1.45-1.4-1.4L20 12l-8-8-2.55 2.55-1.4-1.4L10.6 2.6q.3-.3.662-.45Q11.625 2 12 2t.738.15q.362.15.662.45l8 8q.3.3.45.662.15.363.15.738t-.15.738q-.15.362-.45.662Zm-2.9-2.9L17 12l-5-5-1.05 1.05Zm-2.5-2.5ZM10.6 13.4Z"/>
    </Icon>
  )
});

export default IconMaterialDirectionsAltOffOutlined;
