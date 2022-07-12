import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditOffRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditOffRoundedW700Filled'
      short_name='EditOff'

      {...props}
    >
      <path d="M18.575 22 12.475 15.9 7.5 20.875Q7.25 21.125 6.975 21.238Q6.7 21.35 6.375 21.35H4.225Q3.575 21.35 3.113 20.888Q2.65 20.425 2.65 19.775V17.625Q2.65 17.3 2.763 17.025Q2.875 16.75 3.125 16.5L8.1 11.525L1.85 5.3Q1.5 4.95 1.513 4.45Q1.525 3.95 1.875 3.6Q2.225 3.25 2.725 3.25Q3.225 3.25 3.575 3.6L20.275 20.325Q20.625 20.675 20.625 21.163Q20.625 21.65 20.275 22Q19.925 22.35 19.425 22.35Q18.925 22.35 18.575 22ZM19.225 9.15 14.85 4.8 16.1 3.525Q16.8 2.825 17.75 2.812Q18.7 2.8 19.475 3.525L20.525 4.55Q21.3 5.275 21.25 6.225Q21.2 7.175 20.525 7.85ZM15.6 12.8 11.2 8.425 13.4 6.225 17.8 10.6Z"/>
    </Icon>
  )
});

export default IconMaterialEditOffRoundedW700Filled;