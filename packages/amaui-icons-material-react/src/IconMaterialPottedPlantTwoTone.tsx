import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPottedPlantTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PottedPlantTwoTone'
      short_name='PottedPlant'

      {...props}
    >
      <path d="M9.025 23.675q-1.05 0-1.862-.65-.813-.65-1.088-1.65l-1.025-4.1h13.9l-1.025 4.1q-.25 1-1.075 1.65-.825.65-1.875.65ZM6.25.175q2.45.5 4.088 2.437Q11.975 4.55 12 7.125q.05-2.575 1.675-4.513Q15.3.675 17.75.175q.525-.1.9.262.375.363.275.888Q18.55 3.55 17.05 5.1q-1.5 1.55-3.525 1.875V9.6h6.95q.625 0 1.075.45.45.45.45 1.075v1.7q0 1.275-.862 2.15-.863.875-2.013.875H4.9q-1.175 0-2.038-.875Q2 14.1 2 12.825v-1.7q0-.625.45-1.075.45-.45 1.05-.45h7V7q-2.05-.325-3.537-1.888Q5.475 3.55 5.075 1.325q-.1-.525.288-.888.387-.362.887-.262Z"/>
    </Icon>
  )
});

export default IconMaterialPottedPlantTwoTone;
