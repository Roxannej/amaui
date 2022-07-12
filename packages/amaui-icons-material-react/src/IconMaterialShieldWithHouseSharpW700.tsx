import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShieldWithHouseSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldWithHouseSharpW700'
      short_name='ShieldWithHouse'

      {...props}
    >
      <path d="M12 22.875q-3.85-.95-6.35-4.313-2.5-3.362-2.5-7.462V4.425l8.85-3.3 8.85 3.3V11.1q0 4.1-2.5 7.462-2.5 3.363-6.35 4.313Zm0-18.4L6.3 6.6v4.1L12 6.275l5.7 4.425V6.6ZM9.425 18.3v-3.875h5.15V18.3q.85-.9 1.5-1.913.65-1.012 1.075-2.137l-5.15-4-5.15 4q.425 1.125 1.075 2.137.65 1.013 1.5 1.913ZM12 12.05Z"/>
    </Icon>
  )
});

export default IconMaterialShieldWithHouseSharpW700;
