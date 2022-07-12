import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSmartButtonSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartButtonSharpW700'
      short_name='SmartButton'

      {...props}
    >
      <path d="M0.65 18.35V5.65H23.35V18.35H19V15.2H20.2V8.8H3.8V15.2H10V18.35ZM14.5 19 13.4 16.6 11 15.5 13.4 14.4 14.5 12 15.6 14.4 18 15.5 15.6 16.6ZM17 14 16.375 12.625 15 12 16.375 11.375 17 10 17.625 11.375 19 12 17.625 12.625Z"/>
    </Icon>
  )
});

export default IconMaterialSmartButtonSharpW700;
