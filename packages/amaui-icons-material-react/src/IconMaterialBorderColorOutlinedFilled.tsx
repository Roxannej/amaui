import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBorderColorOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderColorOutlinedFilled'
      short_name='BorderColor'

      {...props}
    >
      <path d="M2 24V20H22V24ZM4 18V14.25L13.05 5.2L16.8 8.95L7.75 18ZM17.925 7.85 14.175 4.1 15.975 2.3Q16.25 2 16.675 2.012Q17.1 2.025 17.375 2.3L19.725 4.65Q20 4.925 20 5.338Q20 5.75 19.725 6.05Z"/>
    </Icon>
  )
});

export default IconMaterialBorderColorOutlinedFilled;
