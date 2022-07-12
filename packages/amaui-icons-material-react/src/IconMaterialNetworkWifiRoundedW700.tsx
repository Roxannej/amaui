import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNetworkWifiRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkWifiRoundedW700'
      short_name='NetworkWifi'

      {...props}
    >
      <path d="M12 22.05Q11.65 22.05 11.35 21.913Q11.05 21.775 10.8 21.5L1.025 10.2Q0.6 9.7 0.613 9Q0.625 8.3 1.1 7.875Q3.35 5.825 6.15 4.7Q8.95 3.575 12 3.575Q15.075 3.575 17.863 4.7Q20.65 5.825 22.9 7.875Q23.375 8.3 23.388 9Q23.4 9.7 22.975 10.2L13.2 21.5Q12.95 21.775 12.65 21.913Q12.35 22.05 12 22.05ZM6.425 11.65Q7.675 10.775 9.125 10.325Q10.575 9.875 12 9.875Q13.425 9.875 14.875 10.325Q16.325 10.775 17.575 11.65L19.65 9.25Q17.775 7.9 15.863 7.312Q13.95 6.725 12 6.725Q10.05 6.725 8.138 7.312Q6.225 7.9 4.35 9.25Z"/>
    </Icon>
  )
});

export default IconMaterialNetworkWifiRoundedW700;