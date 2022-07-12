import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMopSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MopSharpW700'
      short_name='Mop'

      {...props}
    >
      <path d="M11.375 10.05h1.25V4q0-.275-.175-.45T12 3.375q-.275 0-.45.175t-.175.45Zm-5.8 4.375h12.85V13.2H5.575Zm-1.3 6.2h1.45v-1.05q0-.65.463-1.113Q6.65 18 7.3 18q.65 0 1.112.462.463.463.463 1.113v1.05h1.55v-1.05q0-.65.463-1.113Q11.35 18 12 18q.65 0 1.113.462.462.463.462 1.113v1.05h1.55v-1.05q0-.65.463-1.113Q16.05 18 16.7 18q.65 0 1.112.462.463.463.463 1.113v1.05h1.45L18.9 17.2H5.1l-.825 3.425Zm16.175 3.15H3.55q-1.275 0-2.025-.987-.75-.988-.45-2.238l1.35-5.675v-2.25q0-1.075.75-1.825T5 10.05h3.225V4q0-1.575 1.1-2.675 1.1-1.1 2.675-1.1 1.575 0 2.675 1.1 1.1 1.1 1.1 2.675v6.05H19q1.075 0 1.825.75t.75 1.825v2.25L22.9 20.5q.325 1.25-.425 2.262-.75 1.013-2.025 1.013ZM18.425 13.2H5.575h12.85Zm-5.8-3.15h-1.25 1.25Z"/>
    </Icon>
  )
});

export default IconMaterialMopSharpW700;