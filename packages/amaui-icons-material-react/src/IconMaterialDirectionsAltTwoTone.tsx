import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDirectionsAltTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsAltTwoTone'
      short_name='DirectionsAlt'

      {...props}
    >
      <path d="M12 22.475q-.55 0-1.1-.212-.55-.213-1-.663l-7.5-7.5q-.45-.45-.662-.988-.213-.537-.213-1.112 0-.6.213-1.138.212-.537.662-.987l7.5-7.5q.45-.45.988-.675.537-.225 1.112-.225.6 0 1.138.225.537.225.987.675l7.5 7.5q.45.45.675 1 .225.55.225 1.125 0 .55-.225 1.1t-.675 1l-7.5 7.5q-.45.45-1 .663-.55.212-1.125.212Zm-.025-5.6L16.85 12l-4.875-4.875L10.65 8.45l2.6 2.6H7.1v1.875h6.15l-2.6 2.625Z"/>
    </Icon>
  )
});

export default IconMaterialDirectionsAltTwoTone;