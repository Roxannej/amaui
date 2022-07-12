import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOutputOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutputOutlinedW100Filled'
      short_name='Output'

      {...props}
    >
      <path d="M5.65 19.85Q5 19.85 4.575 19.425Q4.15 19 4.15 18.35V5.65Q4.15 5 4.575 4.575Q5 4.15 5.65 4.15H18.35Q19 4.15 19.425 4.575Q19.85 5 19.85 5.65V6.85H19.15V5.65Q19.15 5.35 18.9 5.1Q18.65 4.85 18.35 4.85H5.65Q5.35 4.85 5.1 5.1Q4.85 5.35 4.85 5.65V18.35Q4.85 18.65 5.1 18.9Q5.35 19.15 5.65 19.15H18.35Q18.65 19.15 18.9 18.9Q19.15 18.65 19.15 18.35V17.15H19.85V18.35Q19.85 19 19.425 19.425Q19 19.85 18.35 19.85ZM16.5 16.075 16.025 15.6 19.225 12.35H10.15V11.65H19.225L16.025 8.4L16.5 7.925L20.575 12Z"/>
    </Icon>
  )
});

export default IconMaterialOutputOutlinedW100Filled;
