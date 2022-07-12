import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWbShadeSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WbShadeSharpW700'
      short_name='WbShade'

      {...props}
    >
      <path d="M20.425 20.725 14.525 14.85V11.725L23.525 20.725ZM14.525 20.725V16.95L18.3 20.725ZM2.85 20.8V10.425H0.475L7.7 3.2L14.925 10.425H12.525V20.8ZM7 14.425H9V10.425H7Z"/>
    </Icon>
  )
});

export default IconMaterialWbShadeSharpW700;