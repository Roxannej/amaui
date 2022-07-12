import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHomeOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeOutlinedFilled'
      short_name='Home'

      {...props}
    >
      <path d="M4 21V9L12 3L20 9V21H14V14H10V21Z"/>
    </Icon>
  )
});

export default IconMaterialHomeOutlinedFilled;
