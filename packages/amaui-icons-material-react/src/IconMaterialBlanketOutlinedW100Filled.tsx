import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBlanketOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BlanketOutlinedW100Filled'
      short_name='Blanket'

      {...props}
    >
      <path d="M4.65 19.7q-1 0-1.675-.7T2.3 17.35V6.65q0-1 .675-1.675T4.65 4.3h6.7q.95 0 1.65.675t.7 1.675v6.3h1.85q.575 0 .963.387.387.388.387.963v3q0 .525.363.888.362.362.887.362t.888-.362q.362-.363.362-.888v-6.95q-.75 0-1.225-.475Q17.7 9.4 17.7 8.65v-2h.7v-1.5h.7v1.5h1.3v-1.5h.7v1.5h.7v2q0 .75-.475 1.225-.475.475-1.225.475v6.95q0 .775-.587 1.363-.588.587-1.363.587t-1.362-.587q-.588-.588-.588-1.363v-3.75h-2.5v3.6q0 1.125-.712 1.837-.713.713-1.838.713Zm0-.7h6.5q.825 0 1.338-.512.512-.513.512-1.338 0-.825-.512-1.338-.513-.512-1.338-.512h-5.2q-.35 0-.55.2-.2.2-.2.55 0 .35.2.55.2.2.55.2h5.2q.15 0 .25.113.1.112.1.237 0 .125-.1.237-.1.113-.25.113h-5.2q-.65 0-1.05-.4t-.4-1.05q0-.65.4-1.05t1.05-.4h5.2q.65 0 1.125.175t.725.45V6.65q0-.75-.45-1.2Q12.1 5 11.35 5h-6.7q-.625 0-1.137.45Q3 5.9 3 6.65v10.7q0 .625.513 1.138Q4.025 19 4.65 19Z"/>
    </Icon>
  )
});

export default IconMaterialBlanketOutlinedW100Filled;
