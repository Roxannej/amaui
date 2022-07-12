import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNetworkLockedOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkLockedOutlined'
      short_name='NetworkLocked'

      {...props}
    >
      <path d="M2 22 22 2V12H20V6.825L6.825 20H15V22ZM17.85 22Q17.5 22 17.25 21.75Q17 21.5 17 21.15V17.85Q17 17.5 17.25 17.25Q17.5 17 17.85 17H18V16Q18 15.175 18.587 14.587Q19.175 14 20 14Q20.825 14 21.413 14.587Q22 15.175 22 16V17H22.15Q22.5 17 22.75 17.25Q23 17.5 23 17.85V21.15Q23 21.5 22.75 21.75Q22.5 22 22.15 22ZM19 17H21V16Q21 15.575 20.712 15.287Q20.425 15 20 15Q19.575 15 19.288 15.287Q19 15.575 19 16ZM13.425 13.425Q13.425 13.425 13.425 13.425Q13.425 13.425 13.425 13.425Z"/>
    </Icon>
  )
});

export default IconMaterialNetworkLockedOutlined;