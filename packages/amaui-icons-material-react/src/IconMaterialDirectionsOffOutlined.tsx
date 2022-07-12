import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDirectionsOffOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsOffOutlined'
      short_name='DirectionsOff'

      {...props}
    >
      <path d="M20.475 23.3 16 18.8 13.4 21.4Q12.8 22 12 22Q11.2 22 10.6 21.4L2.6 13.4Q2 12.8 2 12Q2 11.2 2.6 10.6L5.2 8L0.675 3.5L2.1 2.075L21.9 21.875ZM14.6 17.4 13.1 15.9 12 17 10.6 15.6 11.675 14.5 10.175 13H7V11H8.175L6.6 9.4L4 12Q4 12 4 12Q4 12 4 12L12 20Q12 20 12 20Q12 20 12 20ZM18.85 15.95 17.45 14.55 20 12Q20 12 20 12Q20 12 20 12L12 4Q12 4 12 4Q12 4 12 4L9.45 6.55L8.05 5.15L10.6 2.6Q11.2 2 12 2Q12.8 2 13.4 2.6L21.4 10.6Q22 11.2 22 12Q22 12.8 21.4 13.4ZM15.95 13.05 17 12 12 7 10.95 8.05ZM13.45 10.55Q13.45 10.55 13.45 10.55Q13.45 10.55 13.45 10.55Q13.45 10.55 13.45 10.55Q13.45 10.55 13.45 10.55ZM10.6 13.4Q10.6 13.4 10.6 13.4Q10.6 13.4 10.6 13.4Q10.6 13.4 10.6 13.4Q10.6 13.4 10.6 13.4Z"/>
    </Icon>
  )
});

export default IconMaterialDirectionsOffOutlined;