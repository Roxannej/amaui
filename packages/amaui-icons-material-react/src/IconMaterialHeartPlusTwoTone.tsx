import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHeartPlusTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeartPlusTwoTone'
      short_name='HeartPlus'

      {...props}
    >
      <path d="M16 17.5v-3h-3v-3.025h3v-3h3.025v3h3V14.5h-3v3Zm-5.025 4.375-1.05-.975q-2.95-2.65-4.812-4.537-1.863-1.888-2.901-3.326Q1.175 11.6.775 10.425.375 9.25.375 8q0-2.65 1.775-4.425T6.55 1.8q1.25 0 2.388.45 1.137.45 2.037 1.35.975-.9 2.087-1.35 1.113-.45 2.338-.45 2.575 0 4.388 1.687Q21.6 5.175 21.7 7.85q-.875-.65-1.95-1t-2.25-.375q-2.7 0-4.6 1.9Q11 10.275 11 13q0 1.75.9 3.275t2.5 2.45q-.4.4-.7.688-.3.287-.8.712Z"/>
    </Icon>
  )
});

export default IconMaterialHeartPlusTwoTone;
