import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditOutlinedW100'
      short_name='Edit'

      {...props}
    >
      <path d="M5.4 19H6.375L16.875 8.5L16.4 8L15.9 7.525L5.4 18.025ZM4.7 19.7V17.725L17.35 5.075Q17.55 4.875 17.85 4.875Q18.15 4.875 18.35 5.075L19.325 6.05Q19.525 6.25 19.525 6.55Q19.525 6.85 19.325 7.05L6.675 19.7ZM18.825 6.55 17.85 5.575ZM16.875 8.5 16.4 8 15.9 7.525 16.875 8.5Z"/>
    </Icon>
  )
});

export default IconMaterialEditOutlinedW100;