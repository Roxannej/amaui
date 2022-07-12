import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHumidityLowRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HumidityLowRoundedW700'
      short_name='HumidityLow'

      {...props}
    >
      <path d="M12 22.35q-3.65 0-6.25-2.538-2.6-2.537-2.6-6.162 0-1.825.688-3.425.687-1.6 1.937-2.8L12 1.3l6.225 6.125q1.25 1.2 1.938 2.8.687 1.6.687 3.425 0 3.625-2.6 6.162-2.6 2.538-6.25 2.538Zm0-16.625-4.025 4q-.8.8-1.237 1.787Q6.3 12.5 6.3 13.65q0 2.3 1.663 3.925Q9.625 19.2 12 19.2t4.038-1.625Q17.7 15.95 17.7 13.65q0-1.15-.438-2.138-.437-.987-1.237-1.787Z"/>
    </Icon>
  )
});

export default IconMaterialHumidityLowRoundedW700;
