import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShieldWithHouseTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldWithHouseTwoTone'
      short_name='ShieldWithHouse'

      {...props}
    >
      <path d="m12 10.175 5.075 3.95q.25-.7.387-1.475.138-.775.138-1.55v-.4L12 6.35 6.4 10.7v.4q0 .775.15 1.55t.4 1.475Zm0 9.325q.7-.275 1.338-.688.637-.412 1.187-.887v-3.45H9.5v3.45q.55.475 1.188.887.637.413 1.312.688Zm0 3.125Q8.25 21.7 5.812 18.4q-2.437-3.3-2.437-7.3V4.6L12 1.375 20.625 4.6v6.5q0 4-2.437 7.3Q15.75 21.7 12 22.625Z"/>
    </Icon>
  )
});

export default IconMaterialShieldWithHouseTwoTone;
