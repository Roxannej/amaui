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
      <path d="M9.025 23.675q-1.05 0-1.862-.65-.813-.65-1.088-1.65l-1.025-4.1h13.9l-1.025 4.1q-.25 1-1.075 1.65-.825.65-1.875.65ZM12 7.125q.05-2.925 2.088-4.975Q16.125.1 19.025.05 19 2.725 17.413 4.662 15.825 6.6 13.525 6.975V9.6H22v3.225q0 1.275-.862 2.15-.863.875-2.013.875H4.9q-1.175 0-2.038-.875Q2 14.1 2 12.825V9.6h8.5V7q-2.35-.35-3.925-2.313Q5 2.725 4.975.05q2.9.05 4.95 2.1Q11.975 4.2 12 7.125Z"/>
    </Icon>
  )
});

export default IconMaterialPottedPlantTwoTone;
