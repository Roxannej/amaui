import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEvChargerOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EvChargerOutlinedW700Filled'
      short_name='EvCharger'

      {...props}
    >
      <path d="m8.5 19 2.5-4H9.5v-3L7 16h1.5ZM6 10h6V5H6ZM2.85 22.15V5q0-1.325.913-2.238Q4.675 1.85 6 1.85h6q1.325 0 2.238.912.912.913.912 2.238v7.775h1.45q.925 0 1.563.625.637.625.637 1.55v4.5q0 .35.275.588.275.237.625.237t.612-.237q.263-.238.263-.588V9.725q-.65 0-1.1-.45-.45-.45-.45-1.1V5.75h.5V4h1.5v1.75H22V4h1.5v1.75h.5v2.425q0 .65-.45 1.1-.45.45-1.1.45v9.725q0 1.125-.8 1.912-.8.788-1.95.788t-1.962-.788q-.813-.787-.813-1.912v-4.8H15.15v7.5Z"/>
    </Icon>
  )
});

export default IconMaterialEvChargerOutlinedW700Filled;
