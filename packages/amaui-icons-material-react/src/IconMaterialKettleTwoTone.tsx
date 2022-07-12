import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKettleTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KettleTwoTone'
      short_name='Kettle'

      {...props}
    >
      <path d="M4.55 19.5V5.775L1.025.525h17.5v3h1.925q1.225 0 2.125.9.9.9.9 2.125v5.05q0 1.25-.9 2.138-.9.887-2.125.887h-1.925V19.5Zm13.975-7.9h1.925V6.55h-1.925Zm-6.85 3.925h2.875V4.5h-2.875ZM1.55 23.45v-3.025h20.925v3.025Z"/>
    </Icon>
  )
});

export default IconMaterialKettleTwoTone;
