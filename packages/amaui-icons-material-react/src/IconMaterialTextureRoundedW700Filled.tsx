import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTextureRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextureRoundedW700Filled'
      short_name='Texture'

      {...props}
    >
      <path d="M4.5 21.725Q3.675 21.525 3.075 20.925Q2.475 20.325 2.275 19.5L19.5 2.275Q20.35 2.475 20.938 3.062Q21.525 3.65 21.725 4.5ZM2.15 16.3V11.825L11.825 2.15H16.3ZM2.15 8.475V5.3Q2.15 3.975 3.062 3.062Q3.975 2.15 5.3 2.15H8.475ZM15.525 21.85 21.85 15.525V18.7Q21.85 20.025 20.938 20.938Q20.025 21.85 18.7 21.85ZM7.7 21.85 21.85 7.7V12.175L12.175 21.85Z"/>
    </Icon>
  )
});

export default IconMaterialTextureRoundedW700Filled;