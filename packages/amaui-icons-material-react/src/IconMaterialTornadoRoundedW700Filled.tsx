import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTornadoRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TornadoRoundedW700Filled'
      short_name='Tornado'

      {...props}
    >
      <path d="M2.975 7.425 2.875 7.225Q1.95 5.65 2.863 4.075Q3.775 2.5 5.6 2.5H18.4Q20.225 2.5 21.138 4.075Q22.05 5.65 21.125 7.225L21.025 7.425ZM5.875 12.425 4.8 10.575H19.2L18.125 12.425ZM9.275 18.3 7.7 15.575H16.3L14.725 18.3Q13.8 19.875 12 19.875Q10.2 19.875 9.275 18.3Z"/>
    </Icon>
  )
});

export default IconMaterialTornadoRoundedW700Filled;