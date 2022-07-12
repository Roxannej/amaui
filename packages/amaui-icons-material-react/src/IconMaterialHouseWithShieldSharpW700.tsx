import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHouseWithShieldSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HouseWithShieldSharpW700'
      short_name='HouseWithShield'

      {...props}
    >
      <path d="M12 17.675q1.625-.425 2.688-1.863 1.062-1.437 1.062-3.237v-2.4L12 8.3l-3.75 1.875v2.4q0 1.8 1.062 3.237Q10.375 17.25 12 17.675ZM3.5 21.5V8.75L12 2.375l8.5 6.375V21.5Zm3.15-3.15h10.7v-8.025L12 6.3l-5.35 4.025ZM12 12.325Z"/>
    </Icon>
  )
});

export default IconMaterialHouseWithShieldSharpW700;
