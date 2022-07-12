import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDetailsSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DetailsSharpW700Filled'
      short_name='Details'

      {...props}
    >
      <path d="M0.475 21.85 12 1.125 23.525 21.85ZM5.825 18.7H10.425V10.425ZM13.575 18.7H18.175L13.575 10.425Z"/>
    </Icon>
  )
});

export default IconMaterialDetailsSharpW700Filled;