import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMan4RoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Man4RoundedW100Filled'
      short_name='Man4'

      {...props}
    >
      <path d="M11.3 21.35q-.425 0-.75-.275t-.375-.7L8.8 9.225q-.075-.675.375-1.175t1.125-.5h3.4q.675 0 1.125.5.45.5.375 1.175l-1.375 11.15q-.05.425-.375.7-.325.275-.75.275Zm.7-15.6q-.65 0-1.125-.475T10.4 4.15q0-.65.475-1.125T12 2.55q.65 0 1.125.475T13.6 4.15q0 .65-.475 1.125T12 5.75Z"/>
    </Icon>
  )
});

export default IconMaterialMan4RoundedW100Filled;
