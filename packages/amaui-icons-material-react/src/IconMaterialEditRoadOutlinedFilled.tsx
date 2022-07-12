import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditRoadOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditRoadOutlinedFilled'
      short_name='EditRoad'

      {...props}
    >
      <path d="M16 13.05V4H18V11.05ZM4 20V4H6V20ZM10 8V4H12V8ZM10 14V10H12V14ZM10 20V16H12V20ZM22.125 14 20 11.875 20.725 11.15Q21 10.875 21.425 10.875Q21.85 10.875 22.125 11.15L22.85 11.875Q23.125 12.15 23.125 12.575Q23.125 13 22.85 13.275ZM14 20V17.875L19.3 12.575L21.425 14.7L16.125 20Z"/>
    </Icon>
  )
});

export default IconMaterialEditRoadOutlinedFilled;