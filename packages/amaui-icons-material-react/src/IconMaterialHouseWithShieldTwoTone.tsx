import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHouseWithShieldTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HouseWithShieldTwoTone'
      short_name='HouseWithShield'

      {...props}
    >
      <path d="M12 17.6q1.625-.425 2.663-1.838Q15.7 14.35 15.7 12.575v-2.35L12 8.375l-3.675 1.85v2.35q0 1.775 1.05 3.187Q10.425 17.175 12 17.6Zm-8.425 3.825V8.775L12 2.45l8.45 6.325v12.65Z"/>
    </Icon>
  )
});

export default IconMaterialHouseWithShieldTwoTone;
