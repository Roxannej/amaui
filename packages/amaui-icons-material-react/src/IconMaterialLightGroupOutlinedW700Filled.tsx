import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLightGroupOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LightGroupOutlinedW700Filled'
      short_name='LightGroup'

      {...props}
    >
      <path d="M2.35 23.3v-3.15h9.15v3.15Zm15.15-1.65q-1.25 0-2.125-.875T14.5 18.65h-1.925q-.65 0-1.112-.462Q11 17.725 11 17.075q0-2.275 1.4-3.975 1.4-1.7 3.525-2.225V.675h3.15v10.2q2.125.525 3.538 2.225 1.412 1.7 1.387 3.975 0 .65-.462 1.113-.463.462-1.113.462H20.5q0 1.25-.862 2.125-.863.875-2.138.875Zm-12.15-3v-7.975H2.025q-.775 0-1.25-.613Q.3 9.45.5 8.7l1.85-6.85q.125-.525.538-.85Q3.3.675 3.85.675h6.175q.55 0 .963.325.412.325.537.85l1.85 6.85q.2.75-.275 1.362-.475.613-1.25.613H8.5v7.975Z"/>
    </Icon>
  )
});

export default IconMaterialLightGroupOutlinedW700Filled;