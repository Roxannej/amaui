import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHumidityMidTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HumidityMidTwoTone'
      short_name='HumidityMid'

      {...props}
    >
      <path d="M12 22.125q-3.55 0-6.087-2.488-2.538-2.487-2.538-6.012 0-1.8.675-3.35T5.925 7.55L12 1.575l6.075 5.975q1.225 1.175 1.887 2.725.663 1.55.663 3.35 0 3.525-2.538 6.012Q15.55 22.125 12 22.125Zm0-16.3L8.025 9.75q-.7.7-1.1 1.55-.4.85-.5 1.8h11.15q-.1-.95-.488-1.8-.387-.85-1.112-1.55Z"/>
    </Icon>
  )
});

export default IconMaterialHumidityMidTwoTone;
