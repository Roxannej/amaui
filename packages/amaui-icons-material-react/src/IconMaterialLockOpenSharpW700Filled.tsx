import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLockOpenSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LockOpenSharpW700Filled'
      short_name='LockOpen'

      {...props}
    >
      <path d="M3.15 22.775V7.075H14.225V5.8Q14.225 4.75 13.575 4.125Q12.925 3.5 12 3.5Q11.075 3.5 10.425 4.125Q9.775 4.75 9.775 5.8H6.625Q6.625 3.45 8.188 1.9Q9.75 0.35 12 0.35Q14.25 0.35 15.812 1.9Q17.375 3.45 17.375 5.8V7.075H20.85V22.775ZM12 16.925Q12.825 16.925 13.413 16.337Q14 15.75 14 14.925Q14 14.1 13.413 13.512Q12.825 12.925 12 12.925Q11.175 12.925 10.588 13.512Q10 14.1 10 14.925Q10 15.75 10.588 16.337Q11.175 16.925 12 16.925Z"/>
    </Icon>
  )
});

export default IconMaterialLockOpenSharpW700Filled;
