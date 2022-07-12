import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditOutlinedW100Filled'
      short_name='Edit'

      {...props}
    >
      <path d="M4.7 19.7V17.725L17.35 5.075Q17.55 4.875 17.85 4.875Q18.15 4.875 18.35 5.075L19.325 6.05Q19.525 6.25 19.525 6.55Q19.525 6.85 19.325 7.05L6.675 19.7ZM17.375 8 18.825 6.55 17.85 5.575 16.4 7.025Z"/>
    </Icon>
  )
});

export default IconMaterialEditOutlinedW100Filled;