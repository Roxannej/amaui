import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLightGroupSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LightGroupSharpW700'
      short_name='LightGroup'

      {...props}
    >
      <path d="M2.35 23.3v-3.15h9.15v3.15Zm15.15-1.65q-1.25 0-2.125-.888-.875-.887-.875-2.112H11v-1.575q0-2.275 1.4-3.975 1.4-1.7 3.525-2.225V.675h3.15v10.2q2.125.525 3.538 2.225 1.412 1.7 1.387 3.975v1.575h-3.5q0 1.225-.862 2.112-.863.888-2.138.888Zm-12.15-3v-7.975H-.025l2.7-10H11.2l2.7 10H8.5v7.975Zm9.2-3.15h5.925q-.45-.8-1.25-1.25-.8-.45-1.725-.45-.9 0-1.7.45-.8.45-1.25 1.25ZM4.15 7.525h5.725l-1-3.7H5.15Zm2.875-1.85Zm10.5 8.975Z"/>
    </Icon>
  )
});

export default IconMaterialLightGroupSharpW700;
