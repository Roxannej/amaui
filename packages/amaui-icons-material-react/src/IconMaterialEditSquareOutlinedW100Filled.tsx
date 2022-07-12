import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditSquareOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditSquareOutlinedW100Filled'
      short_name='EditSquare'

      {...props}
    >
      <path d="M5.8 22.4q-.65 0-1.075-.425Q4.3 21.55 4.3 20.9V8.5q0-.65.425-1.075Q5.15 7 5.8 7h7.925L7.8 12.95v5.95h5.95l5.95-5.925V20.9q0 .65-.425 1.075-.425.425-1.075.425Zm4.5-6v-2.425l6.55-6.55L19.3 9.8l-6.575 6.6Zm10-7.6-2.45-2.375 1.2-1.2q.425-.425 1.063-.425.637 0 1.062.45l.3.275q.425.45.425 1.062 0 .613-.45 1.063Z"/>
    </Icon>
  )
});

export default IconMaterialEditSquareOutlinedW100Filled;
