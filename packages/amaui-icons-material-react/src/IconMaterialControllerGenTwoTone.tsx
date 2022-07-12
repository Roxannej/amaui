import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialControllerGenTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ControllerGenTwoTone'
      short_name='ControllerGen'

      {...props}
    >
      <path d="M12 17.925q2.475 0 4.212-1.737Q17.95 14.45 17.95 12q0-2.475-1.738-4.213Q14.475 6.05 12 6.05q-2.45 0-4.188 1.737Q6.075 9.525 6.075 12q0 2.45 1.737 4.188Q9.55 17.925 12 17.925Zm0-2.25q-1.525 0-2.6-1.075-1.075-1.075-1.075-2.6 0-1.55 1.075-2.625T12 8.3q1.55 0 2.625 1.087Q15.7 10.475 15.7 12t-1.087 2.6Q13.525 15.675 12 15.675Zm-.65-3.025q.3.275.662.275.363 0 .638-.275l1.4-1.4q.3-.3.3-.663 0-.362-.3-.637-.275-.3-.637-.3-.363 0-.663.3l-1.4 1.4q-.275.275-.275.638 0 .362.275.662ZM5.4 21.625q-1.275 0-2.15-.875t-.875-2.15V5.4q0-1.275.875-2.15t2.15-.875h13.2q1.275 0 2.15.875t.875 2.15v13.2q0 1.275-.875 2.15t-2.15.875Z"/>
    </Icon>
  )
});

export default IconMaterialControllerGenTwoTone;
