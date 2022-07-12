import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoorbell3pRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Doorbell3pRoundedW700'
      short_name='Doorbell3p'

      {...props}
    >
      <path d="M7 23.15q-1.3 0-2.225-.925T3.85 20V4q0-1.3.925-2.225T7 .85h10q1.3 0 2.225.925T20.15 4v16q0 1.3-.925 2.225T17 23.15ZM7 20h10V4H7v16Zm5-.625q.975 0 1.675-.7.7-.7.7-1.675 0-.975-.7-1.675-.7-.7-1.675-.7-.975 0-1.675.7-.7.7-.7 1.675 0 .975.7 1.675.7.7 1.675.7Zm0-1.75q-.275 0-.45-.175t-.175-.45q0-.275.175-.45t.45-.175q.275 0 .45.175t.175.45q0 .275-.175.45t-.45.175Zm0-3.75q.45 0 .725-.275.275-.275.275-.725h-2q0 .45.275.725.275.275.725.275Zm-4-1.5h8v-1.75h-1V8.7q0-1.125-.575-2.012Q13.85 5.8 12.8 5.5v-.225q0-.35-.225-.575-.225-.225-.575-.225t-.575.225q-.225.225-.225.575V5.5q-1.05.375-1.625 1.225Q9 7.575 9 8.7v1.925H8ZM7 20V4v16Z"/>
    </Icon>
  )
});

export default IconMaterialDoorbell3pRoundedW700;
