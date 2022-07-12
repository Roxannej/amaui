import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditSquareRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditSquareRoundedW700'
      short_name='EditSquare'

      {...props}
    >
      <path d="M5.3 24.55q-1.325 0-2.238-.912-.912-.913-.912-2.238V8q0-1.325.912-2.238.913-.912 2.238-.912h8.9L11.05 8H5.3v13.4h13.4v-5.725l3.15-3.15V21.4q0 1.325-.912 2.238-.913.912-2.238.912ZM12 14.7Zm3.75-8.575 1.925 1.9-6.425 6.35v1.075h1.05l6.425-6.375 1.85 1.85-6.225 6.25q-.45.45-1.025.688-.575.237-1.2.237h-1.95q-.65 0-1.113-.462-.462-.463-.462-1.113v-1.95q0-.625.238-1.2.237-.575.687-1.025Zm4.825 4.8-4.825-4.8L17.875 4q.95-.95 2.263-.925 1.312.025 2.237.975l.35.35q.875.95.875 2.225 0 1.275-.925 2.2Z"/>
    </Icon>
  )
});

export default IconMaterialEditSquareRoundedW700;
