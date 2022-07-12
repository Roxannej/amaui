import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFloorLampOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FloorLampOutlinedW700'
      short_name='FloorLamp'

      {...props}
    >
      <path d="M10.425 18.975V11H6.1q-.8 0-1.275-.637Q4.35 9.725 4.6 8.95l1.775-5.725q.3-1 1.125-1.613Q8.325 1 9.375 1h5.25q1.05 0 1.875.612.825.613 1.125 1.613L19.4 8.95q.25.775-.225 1.413Q18.7 11 17.9 11h-4.325v7.975ZM8.225 7.85h7.55l-1.15-3.7h-5.25Zm-.8 15.275v-3.15h9.15v3.15ZM12 6Z"/>
    </Icon>
  )
});

export default IconMaterialFloorLampOutlinedW700;
