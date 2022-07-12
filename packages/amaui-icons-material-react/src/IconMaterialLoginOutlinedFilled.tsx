import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLoginOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LoginOutlinedFilled'
      short_name='Login'

      {...props}
    >
      <path d="M10 17 8.625 15.55 11.175 13H3V11H11.175L8.625 8.45L10 7L15 12ZM12 21V19H19Q19 19 19 19Q19 19 19 19V5Q19 5 19 5Q19 5 19 5H12V3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21Z"/>
    </Icon>
  )
});

export default IconMaterialLoginOutlinedFilled;
