import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCallReceivedRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallReceivedRoundedW700Filled'
      short_name='CallReceived'

      {...props}
    >
      <path d="M5.775 20.8Q5.125 20.8 4.662 20.337Q4.2 19.875 4.2 19.225V11.225Q4.2 10.575 4.662 10.112Q5.125 9.65 5.775 9.65Q6.425 9.65 6.888 10.112Q7.35 10.575 7.35 11.225V15.45L17.3 5.5Q17.75 5.05 18.388 5.062Q19.025 5.075 19.475 5.525Q19.925 5.975 19.925 6.625Q19.925 7.275 19.475 7.725L9.55 17.65H13.775Q14.425 17.65 14.888 18.112Q15.35 18.575 15.35 19.225Q15.35 19.875 14.888 20.337Q14.425 20.8 13.775 20.8Z"/>
    </Icon>
  )
});

export default IconMaterialCallReceivedRoundedW700Filled;
