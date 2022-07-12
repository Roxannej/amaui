import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBarcodeTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BarcodeTwoTone'
      short_name='Barcode'

      {...props}
    >
      <path d="M.575 4.75H2.65v14.525H.575Zm6.225 0h1.05v14.525H6.8Zm-3.125 0h2.1v14.525h-2.1Zm16.675 0h3.1v14.525h-3.1Zm-10.425 0H12v14.525H9.925Zm7.3 0h1.025v14.525h-1.025Zm-4.175 0h3.125v14.525H13.05Z"/>
    </Icon>
  )
});

export default IconMaterialBarcodeTwoTone;
