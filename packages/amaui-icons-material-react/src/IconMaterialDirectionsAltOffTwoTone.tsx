import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDirectionsAltOffTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsAltOffTwoTone'
      short_name='DirectionsAltOff'

      {...props}
    >
      <path d="m20.825 23.575-4.35-4.325-2.35 2.35q-.45.45-.987.663-.538.212-1.138.212-.55 0-1.1-.212-.55-.213-1-.663l-7.5-7.5q-.45-.45-.662-1-.213-.55-.213-1.1 0-.6.213-1.138.212-.537.662-.987l2.35-2.35-3.9-3.9 1.6-1.6L22.4 22Zm-8.85-6.7L13.05 15.8l-1.325-1.325-1.075 1.075Zm7.675-.8-3.425-3.45.625-.625-4.875-4.875-.625.625-3.425-3.4L9.9 2.375q.45-.45 1-.675.55-.225 1.1-.225.6 0 1.138.225.537.225.987.675l7.5 7.5q.45.45.675.987.225.538.225 1.138 0 .55-.225 1.1t-.675 1ZM7.1 12.925h3.075L8.3 11.05H7.1Z"/>
    </Icon>
  )
});

export default IconMaterialDirectionsAltOffTwoTone;
