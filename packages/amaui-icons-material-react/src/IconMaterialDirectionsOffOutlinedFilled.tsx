import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDirectionsOffOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsOffOutlinedFilled'
      short_name='DirectionsOff'

      {...props}
    >
      <path d="M20.475 23.3 16 18.8 13.4 21.4Q12.8 22 12 22Q11.2 22 10.6 21.4L2.6 13.4Q2 12.8 2 12Q2 11.2 2.6 10.6L5.2 8L0.675 3.5L2.1 2.075L21.9 21.875ZM12 17 13.1 15.9 11.675 14.5 10.6 15.6ZM18.85 15.95 15.95 13.05 17 12 12 7 10.95 8.05 8.05 5.15 10.6 2.6Q11.2 2 12 2Q12.8 2 13.4 2.6L21.4 10.6Q22 11.2 22 12Q22 12.8 21.4 13.4ZM7 13H10.175L8.175 11H7Z"/>
    </Icon>
  )
});

export default IconMaterialDirectionsOffOutlinedFilled;
