import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBlanketOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BlanketOutlinedW700'
      short_name='Blanket'

      {...props}
    >
      <path d="M3.55 22.6q-1.575 0-2.637-1.087Q-.15 20.425-.15 18.925V5.075Q-.15 3.5.913 2.45 1.975 1.4 3.55 1.4H12q1.5 0 2.6 1.05t1.1 2.625V12.1h.925q1.05 0 1.788.75.737.75.737 1.8v3.7q0 .15.1.25t.25.1q.15 0 .25-.1t.1-.25v-7.675q-.975-.1-1.65-.813-.675-.712-.675-1.712v-3.3h1v-2.3h2.2v2.3h1v-2.3h2.2v2.3h1v3.3q0 1-.675 1.712-.675.713-1.65.813v7.55q0 1.325-.887 2.213-.888.887-2.213.887-1.325 0-2.225-.887-.9-.888-.9-2.213v-3.45H15.7v3q0 2-1.425 3.413Q12.85 22.6 10.85 22.6Zm0-2.75h7.3q.875 0 1.475-.6.6-.6.6-1.475 0-.875-.6-1.475-.6-.6-1.475-.6H6.425q-.15 0-.25.087-.1.088-.1.238t.1.25q.1.1.25.1h4.425q.625 0 1 .437.375.438.375.963 0 .525-.375.95-.375.425-1 .425H6.425q-1.3 0-2.212-.913-.913-.912-.913-2.212 0-1.325.913-2.213.912-.887 2.212-.887h4.425q.55 0 1.063.125.512.125 1.012.4V5.075q0-.425-.25-.675-.25-.25-.675-.25H3.55q-.35 0-.637.25-.288.25-.288.675v13.85q0 .35.288.637.287.288.637.288Z"/>
    </Icon>
  )
});

export default IconMaterialBlanketOutlinedW700;
