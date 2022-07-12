import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDirectionsAltSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsAltSharpW700'
      short_name='DirectionsAlt'

      {...props}
    >
      <path d="M12 24.025-.025 12 12-.025 24.025 12Zm0-4.45L19.575 12 12 4.425 4.425 12ZM12 17l5-5-5-5-1.4 1.4 2.55 2.6H7v2h6.15l-2.55 2.6Zm0-5Z"/>
    </Icon>
  )
});

export default IconMaterialDirectionsAltSharpW700;
