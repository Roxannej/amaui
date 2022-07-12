import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTextureSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextureSharpW700'
      short_name='Texture'

      {...props}
    >
      <path d="M2.275 21.725V19.5L19.5 2.275H21.725V4.5L4.5 21.725ZM2.15 16.3V11.825L11.825 2.15H16.3ZM2.15 8.475V2.15H8.475ZM15.525 21.85 21.85 15.525V21.85ZM7.7 21.85 21.85 7.7V12.175L12.175 21.85Z"/>
    </Icon>
  )
});

export default IconMaterialTextureSharpW700;
