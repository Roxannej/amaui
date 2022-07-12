import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditLocationOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditLocationOutlinedFilled'
      short_name='EditLocation'

      {...props}
    >
      <path d="M8.5 13.5H9.95L13.85 9.575L12.425 8.15L8.5 12.05ZM14.575 8.85 15.275 8.15Q15.4 8.025 15.4 7.887Q15.4 7.75 15.275 7.625L14.375 6.725Q14.25 6.6 14.113 6.6Q13.975 6.6 13.85 6.725L13.15 7.425ZM12 22Q7.975 18.575 5.988 15.637Q4 12.7 4 10.2Q4 6.45 6.413 4.225Q8.825 2 12 2Q15.175 2 17.587 4.225Q20 6.45 20 10.2Q20 12.7 18.013 15.637Q16.025 18.575 12 22Z"/>
    </Icon>
  )
});

export default IconMaterialEditLocationOutlinedFilled;
