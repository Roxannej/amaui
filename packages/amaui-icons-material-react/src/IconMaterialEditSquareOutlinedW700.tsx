import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditSquareOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditSquareOutlinedW700'
      short_name='EditSquare'

      {...props}
    >
      <path d="M5.3 24.55q-1.325 0-2.238-.912-.912-.913-.912-2.238V8q0-1.325.912-2.238.913-.912 2.238-.912h8.9L11.05 8H5.3v13.4h13.4v-5.725l3.15-3.15V21.4q0 1.325-.912 2.238-.913.912-2.238.912ZM12 14.7Zm3.75-8.575 1.925 1.9-6.425 6.35v1.075h1.05l6.425-6.375 1.85 1.85-7.15 7.175H8.6v-4.825Zm4.825 4.8-4.825-4.8L17.875 4q.95-.95 2.263-.925 1.312.025 2.237.975l.35.35q.875.95.875 2.225 0 1.275-.925 2.2Z"/>
    </Icon>
  )
});

export default IconMaterialEditSquareOutlinedW700;