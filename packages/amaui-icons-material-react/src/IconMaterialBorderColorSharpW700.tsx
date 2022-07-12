import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBorderColorSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderColorSharpW700'
      short_name='BorderColor'

      {...props}
    >
      <path d="M2 24V19.225H22V24ZM3.625 17.225V12.95L12.925 3.625L17.225 7.925L7.9 17.225ZM6.2 14.65H6.975L14.05 7.675L13.2 6.85L6.2 13.825ZM18 7.125 13.725 2.825 16.675 -0.125 20.95 4.15ZM6.2 14.65Z"/>
    </Icon>
  )
});

export default IconMaterialBorderColorSharpW700;
