import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWifiLockOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiLockOutlinedFilled'
      short_name='WifiLock'

      {...props}
    >
      <path d="M12 21 0 9Q2.375 6.575 5.487 5.287Q8.6 4 12 4Q15.4 4 18.512 5.287Q21.625 6.575 24 9L22 11H19Q17.35 11 16.175 12.188Q15 13.375 15 15V18ZM17.85 21Q17.5 21 17.25 20.75Q17 20.5 17 20.15V16.85Q17 16.5 17.25 16.25Q17.5 16 17.85 16H18V15Q18 14.175 18.587 13.587Q19.175 13 20 13Q20.825 13 21.413 13.587Q22 14.175 22 15V16H22.15Q22.5 16 22.75 16.25Q23 16.5 23 16.85V20.15Q23 20.5 22.75 20.75Q22.5 21 22.15 21ZM19 16H21V15Q21 14.575 20.712 14.287Q20.425 14 20 14Q19.575 14 19.288 14.287Q19 14.575 19 15Z"/>
    </Icon>
  )
});

export default IconMaterialWifiLockOutlinedFilled;
