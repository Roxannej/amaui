import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHumidityLowTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HumidityLowTwoTone'
      short_name='HumidityLow'

      {...props}
    >
      <path d="M12 22.125q-3.55 0-6.087-2.488-2.538-2.487-2.538-6.012 0-1.8.675-3.35T5.925 7.55L12 1.575l6.075 5.975q1.225 1.175 1.887 2.725.663 1.55.663 3.35 0 3.525-2.538 6.012Q15.55 22.125 12 22.125Zm0-16.3L8.025 9.75q-.75.8-1.187 1.775-.438.975-.438 2.1 0 2.275 1.638 3.875Q9.675 19.1 12 19.1q2.35 0 3.975-1.6t1.625-3.875q0-1.125-.425-2.1-.425-.975-1.2-1.775Z"/>
    </Icon>
  )
});

export default IconMaterialHumidityLowTwoTone;
