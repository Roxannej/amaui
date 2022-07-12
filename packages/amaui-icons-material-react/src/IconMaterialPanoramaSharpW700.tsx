import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPanoramaSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanoramaSharpW700'
      short_name='Panorama'

      {...props}
    >
      <path d="M5.425 16H18.575L14.25 10.2L11.25 14.2L9 11.2ZM1.15 20.85V3.15H22.85V20.85ZM4.3 17.7H19.7V6.3H4.3ZM4.3 17.7V6.3V17.7Z"/>
    </Icon>
  )
});

export default IconMaterialPanoramaSharpW700;
