import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWeightSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WeightSharp'
      short_name='Weight'

      {...props}
    >
      <path d="M6 19h12L16.575 9h-9.15Zm6-12q.425 0 .713-.287Q13 6.425 13 6t-.287-.713Q12.425 5 12 5t-.712.287Q11 5.575 11 6t.288.713Q11.575 7 12 7ZM3.7 21l2-14h3.475q-.075-.25-.125-.488Q9 6.275 9 6q0-1.25.875-2.125T12 3q1.25 0 2.125.875T15 6q0 .275-.05.512-.05.238-.125.488H18.3l2 14ZM6 19h12Z"/>
    </Icon>
  )
});

export default IconMaterialWeightSharp;
