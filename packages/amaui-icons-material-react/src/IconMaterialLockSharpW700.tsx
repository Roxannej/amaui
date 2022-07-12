import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLockSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LockSharpW700'
      short_name='Lock'

      {...props}
    >
      <path d="M3.15 22.775V7.075H6.625V5.8Q6.625 3.525 8.188 1.937Q9.75 0.35 12 0.35Q14.25 0.35 15.812 1.937Q17.375 3.525 17.375 5.8V7.075H20.85V22.775ZM9.775 7.075H14.225V5.8Q14.225 4.85 13.588 4.175Q12.95 3.5 12 3.5Q11.05 3.5 10.413 4.175Q9.775 4.85 9.775 5.8ZM6.3 19.625H17.7V10.225H6.3ZM12 16.925Q12.825 16.925 13.413 16.337Q14 15.75 14 14.925Q14 14.1 13.413 13.512Q12.825 12.925 12 12.925Q11.175 12.925 10.588 13.512Q10 14.1 10 14.925Q10 15.75 10.588 16.337Q11.175 16.925 12 16.925ZM6.3 19.625V10.225V19.625Z"/>
    </Icon>
  )
});

export default IconMaterialLockSharpW700;
