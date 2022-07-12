import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTornadoRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TornadoRoundedW700'
      short_name='Tornado'

      {...props}
    >
      <path d="M5.6 2.5H18.4Q20.225 2.5 21.138 4.075Q22.05 5.65 21.125 7.225L14.725 18.3Q13.8 19.875 12 19.875Q10.2 19.875 9.275 18.3L2.875 7.225Q1.95 5.65 2.863 4.075Q3.775 2.5 5.6 2.5ZM5.6 5.65 6.625 7.425H17.375L18.4 5.65Q18.4 5.65 18.4 5.65Q18.4 5.65 18.4 5.65H5.6Q5.6 5.65 5.6 5.65Q5.6 5.65 5.6 5.65ZM8.45 10.575 9.525 12.425H14.475L15.55 10.575ZM11.35 15.575 12 16.7Q12 16.7 12 16.7Q12 16.7 12 16.7L12.65 15.575Z"/>
    </Icon>
  )
});

export default IconMaterialTornadoRoundedW700;
