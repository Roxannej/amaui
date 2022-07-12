import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLiveTvOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LiveTvOutlinedFilled'
      short_name='LiveTv'

      {...props}
    >
      <path d="M9.5 15.5 16.5 11 9.5 6.5ZM8 21V19H4Q3.175 19 2.588 18.413Q2 17.825 2 17V5Q2 4.175 2.588 3.587Q3.175 3 4 3H20Q20.825 3 21.413 3.587Q22 4.175 22 5V17Q22 17.825 21.413 18.413Q20.825 19 20 19H16V21Z"/>
    </Icon>
  )
});

export default IconMaterialLiveTvOutlinedFilled;
