import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTvOffOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvOffOutlinedFilled'
      short_name='TvOff'

      {...props}
    >
      <path d="M21.3 18.5 5.85 3H20Q20.825 3 21.413 3.587Q22 4.175 22 5V17Q22 17.45 21.825 17.825Q21.65 18.2 21.3 18.5ZM20.5 23.3 16.2 19H16V21H8V19H4Q3.175 19 2.588 18.413Q2 17.825 2 17V5Q2 4.95 2 4.9Q2 4.85 2 4.8L0.7 3.5L2.1 2.1L21.9 21.9Z"/>
    </Icon>
  )
});

export default IconMaterialTvOffOutlinedFilled;
