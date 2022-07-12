import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShieldWithHeartOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldWithHeartOutlinedW700Filled'
      short_name='ShieldWithHeart'

      {...props}
    >
      <path d="M12 16.45q2.9-2.625 3.7-3.65.8-1.025.8-2.075 0-1.025-.725-1.75-.725-.725-1.75-.725-.6 0-1.137.238-.538.237-.888.662-.35-.425-.887-.662-.538-.238-1.138-.238-1.025 0-1.75.725-.725.725-.725 1.75 0 .525.15.987.15.463.625 1.063.475.6 1.362 1.463.888.862 2.363 2.212Zm0 6.425q-3.85-.95-6.35-4.313-2.5-3.362-2.5-7.462V4.425l8.85-3.3 8.85 3.3V11.1q0 4.1-2.5 7.462-2.5 3.363-6.35 4.313Z"/>
    </Icon>
  )
});

export default IconMaterialShieldWithHeartOutlinedW700Filled;