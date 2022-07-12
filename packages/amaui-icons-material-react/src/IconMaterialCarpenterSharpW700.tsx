import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCarpenterSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CarpenterSharpW700'
      short_name='Carpenter'

      {...props}
    >
      <path d="M14.475 25.05 9 19.575 10.7 17.9 1.275 4.425 6.325 -0.6 23.225 16.275ZM12.925 15.6 15.525 13.025 6.325 3.85 5.375 4.775ZM14.475 20.6 18.75 16.3 17.75 15.25 13.425 19.575ZM12.925 15.6 15.525 13.025Z"/>
    </Icon>
  )
});

export default IconMaterialCarpenterSharpW700;
