import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWifiLockSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiLockSharpW700Filled'
      short_name='WifiLock'

      {...props}
    >
      <path d="M12 22.925 0 9Q2.35 6.45 5.45 5.012Q8.55 3.575 12 3.575Q15.45 3.575 18.55 5.012Q21.65 6.45 24 9L22.275 11H19.05Q17.4 11 16.225 12.188Q15.05 13.375 15.05 15V19.375ZM17 21V16H18V15Q18 14.175 18.587 13.587Q19.175 13 20 13Q20.825 13 21.413 13.587Q22 14.175 22 15V16H23V21ZM19 16H21V15Q21 14.575 20.712 14.287Q20.425 14 20 14Q19.575 14 19.288 14.287Q19 14.575 19 15Z"/>
    </Icon>
  )
});

export default IconMaterialWifiLockSharpW700Filled;
