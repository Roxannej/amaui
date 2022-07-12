import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrushRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrushRoundedW700Filled'
      short_name='Brush'

      {...props}
    >
      <path d="M5.8 21.8Q4.525 21.8 3.163 21.038Q1.8 20.275 0.8 18.725Q1.7 18.725 2.4 18.312Q3.1 17.9 3.2 16.85Q3.325 15.5 4.312 14.537Q5.3 13.575 6.8 13.575Q8.3 13.575 9.363 14.637Q10.425 15.7 10.425 17.2Q10.425 19.125 9.075 20.462Q7.725 21.8 5.8 21.8ZM12.25 15.275 8.725 11.75 18.825 1.65Q19.1 1.375 19.513 1.362Q19.925 1.35 20.225 1.65L22.35 3.775Q22.65 4.075 22.65 4.475Q22.65 4.875 22.35 5.175Z"/>
    </Icon>
  )
});

export default IconMaterialBrushRoundedW700Filled;
