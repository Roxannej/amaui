import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatteryProfileTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryProfileTwoTone'
      short_name='BatteryProfile'

      {...props}
    >
      <path d="M3.225 22.575q-.625 0-1.062-.438-.438-.437-.438-1.062V4.9q0-.625.438-1.063Q2.6 3.4 3.225 3.4h1.8v-.475q0-.6.45-1.05.45-.45 1.05-.45h1.95q.625 0 1.075.45.45.45.45 1.05V3.4h1.8q.6 0 1.05.437.45.438.45 1.063v16.175q0 .625-.45 1.062-.45.438-1.05.438ZM4.75 19.55h5.525V6.425H4.75Zm13.625-8.35-.75-1.65-1.6-.725q-.225-.1-.325-.288-.1-.187-.1-.412 0-.225.1-.4.1-.175.325-.3l1.6-.7.75-1.65q.125-.2.3-.313.175-.112.4-.112.225 0 .4.125.175.125.275.325l.75 1.625 1.625.7q.2.125.313.313.112.187.112.412 0 .2-.112.387-.113.188-.313.288L20.5 9.55l-.75 1.625q-.1.225-.275.337-.175.113-.4.113-.225 0-.4-.1-.175-.1-.3-.325Z"/>
    </Icon>
  )
});

export default IconMaterialBatteryProfileTwoTone;
