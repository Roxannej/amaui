import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNearbyErrorSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearbyErrorSharpFilled'
      short_name='NearbyError'

      {...props}
    >
      <path d="M20 18V10H22V18ZM21 22Q20.575 22 20.288 21.712Q20 21.425 20 21Q20 20.575 20.288 20.288Q20.575 20 21 20Q21.425 20 21.712 20.288Q22 20.575 22 21Q22 21.425 21.712 21.712Q21.425 22 21 22ZM12 22.8 1.2 12 12 1.2 18 7.2V10.8L12 4.8L4.8 12L12 19.2L18 13.2V16.8ZM12 16.4 7.6 12 12 7.6 16.4 12Z"/>
    </Icon>
  )
});

export default IconMaterialNearbyErrorSharpFilled;