import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPottedPlantOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PottedPlantOutlinedFilled'
      short_name='PottedPlant'

      {...props}
    >
      <path d="M8.55 22q-.7 0-1.225-.425-.525-.425-.7-1.1L5.5 16h13l-1.125 4.475q-.175.675-.7 1.1Q16.15 22 15.45 22ZM12 8q0-2.5 1.75-4.25T18 2q0 2.25-1.425 3.9T13 7.9V10h8v3q0 .825-.587 1.412Q19.825 15 19 15H5q-.825 0-1.413-.588Q3 13.825 3 13v-3h8V7.9q-2.15-.35-3.575-2Q6 4.25 6 2q2.5 0 4.25 1.75T12 8Z"/>
    </Icon>
  )
});

export default IconMaterialPottedPlantOutlinedFilled;
