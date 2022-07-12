import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditSquareRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditSquareRoundedW700Filled'
      short_name='EditSquare'

      {...props}
    >
      <path d="M21.825 9.675 17 4.875 17.875 4q.95-.95 2.263-.925 1.312.025 2.237.975l.35.35q.875.95.875 2.225 0 1.275-.925 2.2ZM5.3 24.55q-1.325 0-2.238-.912-.912-.913-.912-2.238V8q0-1.325.912-2.238.913-.912 2.238-.912h8.9l-6.225 6.225q-.65.65-1.012 1.512Q6.6 13.45 6.6 14.4v2.55q0 1.325.913 2.238.912.912 2.237.912h2.55q.95 0 1.813-.362.862-.363 1.512-1.013l6.225-6.2V21.4q0 1.325-.912 2.238-.913.912-2.238.912Zm4.875-6.45q-.65 0-1.113-.462-.462-.463-.462-1.113v-1.95q0-.625.238-1.2.237-.575.687-1.025l6.05-6.05 4.825 4.8-6.05 6.075q-.45.45-1.025.688-.575.237-1.2.237Z"/>
    </Icon>
  )
});

export default IconMaterialEditSquareRoundedW700Filled;