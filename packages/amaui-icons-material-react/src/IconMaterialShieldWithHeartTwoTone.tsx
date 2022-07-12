import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShieldWithHeartTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldWithHeartTwoTone'
      short_name='ShieldWithHeart'

      {...props}
    >
      <path d="M12 16.375q2.875-2.6 3.662-3.588.788-.987.788-2.037 0-1-.725-1.725Q15 8.3 14 8.3q-.6 0-1.125.237-.525.238-.875.663-.325-.425-.862-.663Q10.6 8.3 9.975 8.3q-.975 0-1.688.725-.712.725-.712 1.725 0 .5.138.962.137.463.612 1.05.475.588 1.35 1.438.875.85 2.325 2.175Zm0 6.25q-3.75-.925-6.188-4.212-2.437-3.288-2.437-7.313V4.6L12 1.375 20.625 4.6v6.5q0 4.025-2.437 7.313Q15.75 21.7 12 22.625Z"/>
    </Icon>
  )
});

export default IconMaterialShieldWithHeartTwoTone;