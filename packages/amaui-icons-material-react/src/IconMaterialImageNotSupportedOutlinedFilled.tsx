import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialImageNotSupportedOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImageNotSupportedOutlinedFilled'
      short_name='ImageNotSupported'

      {...props}
    >
      <path d="M20.475 23.3 18.175 21Q18.175 21 18.175 21Q18.175 21 18.175 21H5Q4.175 21 3.587 20.413Q3 19.825 3 19V5.825Q3 5.825 3 5.825Q3 5.825 3 5.825L0.7 3.5L2.1 2.1L21.9 21.9ZM6 17H14.175L11.85 14.675L11 15.725L9 13ZM21 18.175 5.825 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5Z"/>
    </Icon>
  )
});

export default IconMaterialImageNotSupportedOutlinedFilled;
