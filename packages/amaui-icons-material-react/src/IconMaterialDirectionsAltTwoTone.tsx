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
      <path d="M12 22.475q-.55 0-1.1-.212-.55-.213-1-.663l-7.5-7.5q-.45-.45-.662-.988-.213-.537-.213-1.112 0-.6.213-1.138.212-.537.662-.987l7.5-7.5q.45-.45.988-.675.537-.225 1.112-.225.6 0 1.138.225.537.225.987.675l7.5 7.5q.45.45.675 1 .225.55.225 1.125 0 .55-.225 1.1t-.675 1l-7.5 7.5q-.45.45-1 .663-.55.212-1.125.212Zm1.25-9.55-1.95 1.95q-.275.275-.275.662 0 .388.3.663.275.275.663.275.387 0 .662-.275l3.125-3.125q.45-.45.45-1.075t-.45-1.1L12.65 7.775q-.275-.275-.662-.275-.388 0-.663.275t-.287.663q-.013.387.262.662l1.95 1.95h-5.2q-.4 0-.675.275T7.1 12q0 .375.275.65t.675.275Z"/>
    </Icon>
  )
});

export default IconMaterialDirectionsAltTwoTone;
