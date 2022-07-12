import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHideImageOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HideImageOutlinedFilled'
      short_name='HideImage'

      {...props}
    >
      <path d="M21 18.15 5.85 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5ZM19.8 22.6 18.2 21H5Q4.175 21 3.587 20.413Q3 19.825 3 19V5.8L1.4 4.2L2.8 2.8L21.2 21.2ZM6 17H14.175L12.075 14.9L11.25 16L9 13Z"/>
    </Icon>
  )
});

export default IconMaterialHideImageOutlinedFilled;
