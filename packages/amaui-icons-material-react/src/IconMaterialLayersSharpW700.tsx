import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLayersSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LayersSharpW700'
      short_name='Layers'

      {...props}
    >
      <path d="M11.975 23.3 1.6 15.2 4.175 13.225 11.975 19.3 19.825 13.225 22.4 15.2ZM11.975 16.8 1.6 8.725 11.975 0.65 22.35 8.725ZM11.975 8.725ZM11.975 12.8 17.225 8.725 11.975 4.675 6.725 8.725Z"/>
    </Icon>
  )
});

export default IconMaterialLayersSharpW700;
