import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlipOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlipOutlinedFilled'
      short_name='Flip'

      {...props}
    >
      <path d="M9 21H5Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H9V5H5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19H9ZM11 23V1H13V23ZM19 5V3Q19.825 3 20.413 3.587Q21 4.175 21 5H19ZM19 13V11H21V13ZM19 21V19H21Q21 19.825 20.413 20.413Q19.825 21 19 21ZM19 9V7H21V9ZM19 17V15H21V17ZM15 21V19H17V21ZM15 5V3H17V5Z"/>
    </Icon>
  )
});

export default IconMaterialFlipOutlinedFilled;
