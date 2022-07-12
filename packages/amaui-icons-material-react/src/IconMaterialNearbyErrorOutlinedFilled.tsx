import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNearbyErrorOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearbyErrorOutlinedFilled'
      short_name='NearbyError'

      {...props}
    >
      <path d="M20 18V10H22V18ZM21 22Q20.575 22 20.288 21.712Q20 21.425 20 21Q20 20.575 20.288 20.288Q20.575 20 21 20Q21.425 20 21.712 20.288Q22 20.575 22 21Q22 21.425 21.712 21.712Q21.425 22 21 22ZM10.6 21.4 2.6 13.4Q2 12.8 2 12Q2 11.2 2.6 10.6L10.6 2.6Q11.2 2 12 2Q12.8 2 13.4 2.6L18 7.2V10.8L12 4.8Q12 4.8 12 4.8Q12 4.8 12 4.8L4.8 12Q4.8 12 4.8 12Q4.8 12 4.8 12L12 19.2Q12 19.2 12 19.2Q12 19.2 12 19.2L18 13.2V16.8L13.4 21.4Q12.8 22 12 22Q11.2 22 10.6 21.4ZM12 16.4 7.6 12 12 7.6 16.4 12Z"/>
    </Icon>
  )
});

export default IconMaterialNearbyErrorOutlinedFilled;
