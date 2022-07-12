import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditSquareOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditSquareOutlinedW700Filled'
      short_name='EditSquare'

      {...props}
    >
      <path d="M5.3 24.55q-1.325 0-2.238-.912-.912-.913-.912-2.238V8q0-1.325.912-2.238.913-.912 2.238-.912h8.9l-7.6 7.6v7.65h7.65l7.6-7.575V21.4q0 1.325-.912 2.238-.913.912-2.238.912Zm3.3-6.45v-4.825L15.575 6.3l4.825 4.8-6.975 7Zm13.225-8.425L17 4.875 17.875 4q.95-.95 2.263-.925 1.312.025 2.237.975l.35.35q.875.95.875 2.225 0 1.275-.925 2.2Z"/>
    </Icon>
  )
});

export default IconMaterialEditSquareOutlinedW700Filled;
