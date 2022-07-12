import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDehazeRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DehazeRoundedW700Filled'
      short_name='Dehaze'

      {...props}
    >
      <path d="M3 19.35Q2.35 19.35 1.888 18.888Q1.425 18.425 1.425 17.775Q1.425 17.125 1.888 16.663Q2.35 16.2 3 16.2H21Q21.65 16.2 22.113 16.663Q22.575 17.125 22.575 17.775Q22.575 18.425 22.113 18.888Q21.65 19.35 21 19.35ZM3 13.575Q2.35 13.575 1.888 13.112Q1.425 12.65 1.425 12Q1.425 11.35 1.888 10.887Q2.35 10.425 3 10.425H21Q21.65 10.425 22.113 10.887Q22.575 11.35 22.575 12Q22.575 12.65 22.113 13.112Q21.65 13.575 21 13.575ZM3 7.8Q2.35 7.8 1.888 7.338Q1.425 6.875 1.425 6.225Q1.425 5.575 1.888 5.112Q2.35 4.65 3 4.65H21Q21.65 4.65 22.113 5.112Q22.575 5.575 22.575 6.225Q22.575 6.875 22.113 7.338Q21.65 7.8 21 7.8Z"/>
    </Icon>
  )
});

export default IconMaterialDehazeRoundedW700Filled;
