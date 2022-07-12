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
      <path d="M8.55 20h6.9l1-4h-8.9l1 4Zm0 2q-.7 0-1.225-.425-.525-.425-.7-1.1L5.5 16h13l-1.125 4.475q-.175.675-.7 1.1Q16.15 22 15.45 22ZM5 14h14v-2H5v2Zm7-6q0-2.5 1.75-4.25T18 2q0 2.25-1.425 3.9T13 7.9V10h8v4q0 .825-.587 1.412Q19.825 16 19 16H5q-.825 0-1.413-.588Q3 14.825 3 14v-4h8V7.9q-2.15-.35-3.575-2Q6 4.25 6 2q2.5 0 4.25 1.75T12 8Z"/>
    </Icon>
  )
});

export default IconMaterialPottedPlantTwoTone;
