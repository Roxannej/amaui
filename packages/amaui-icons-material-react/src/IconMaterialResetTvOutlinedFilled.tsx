import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialResetTvOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResetTvOutlinedFilled'
      short_name='ResetTv'

      {...props}
    >
      <path d="M8 21V19H4Q3.175 19 2.588 18.413Q2 17.825 2 17V5Q2 4.175 2.588 3.587Q3.175 3 4 3H20Q20.825 3 21.413 3.587Q22 4.175 22 5V10H12.8L14.65 8.15L13.25 6.75L9 11L13.25 15.25L14.65 13.85L12.8 12H22V17Q22 17.825 21.413 18.413Q20.825 19 20 19H16V21Z"/>
    </Icon>
  )
});

export default IconMaterialResetTvOutlinedFilled;