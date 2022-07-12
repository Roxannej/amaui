import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNestHelloDoorbellTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestHelloDoorbellTwoTone'
      short_name='NestHelloDoorbell'

      {...props}
    >
      <path d="M12 24.225q-2.7 0-4.575-1.875T5.55 17.775V6.225q0-2.725 1.875-4.6Q9.3-.25 12.025-.25q2.725 0 4.6 1.875Q18.5 3.5 18.5 6.225v11.55q0 2.7-1.875 4.575T12 24.225Zm0-5.15q.95 0 1.65-.675t.7-1.625q0-.95-.7-1.65t-1.65-.7q-.95 0-1.625.7t-.675 1.65q0 .95.675 1.625t1.625.675Zm0-1.7q-.275 0-.438-.187-.162-.188-.162-.413 0-.225.162-.425.163-.2.438-.2t.45.175q.175.175.175.45 0 .225-.175.413-.175.187-.45.187Zm0-7.825q.95 0 1.65-.688.7-.687.7-1.637t-.7-1.638Q12.95 4.9 12 4.9t-1.625.687Q9.7 6.275 9.7 7.225t.675 1.637q.675.688 1.625.688Z"/>
    </Icon>
  )
});

export default IconMaterialNestHelloDoorbellTwoTone;
