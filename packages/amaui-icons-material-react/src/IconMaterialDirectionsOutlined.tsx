import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDirectionsOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsOutlined'
      short_name='Directions'

      {...props}
    >
      <path d="M10.6 21.4 2.6 13.4Q2 12.8 2 12Q2 11.2 2.6 10.6L10.6 2.6Q11.2 2 12 2Q12.8 2 13.4 2.6L21.4 10.6Q22 11.2 22 12Q22 12.8 21.4 13.4L13.4 21.4Q12.8 22 12 22Q11.2 22 10.6 21.4ZM12 20Q12 20 12 20Q12 20 12 20L20 12Q20 12 20 12Q20 12 20 12L12 4Q12 4 12 4Q12 4 12 4L4 12Q4 12 4 12Q4 12 4 12ZM12 17 17 12 12 7 10.6 8.4 13.15 11H7V13H13.15L10.6 15.6ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Z"/>
    </Icon>
  )
});

export default IconMaterialDirectionsOutlined;