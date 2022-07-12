import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAllOutOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AllOutOutlinedW700Filled'
      short_name='AllOut'

      {...props}
    >
      <path d="M2.15 21.85V16H4.925V19.075H8V21.85ZM16 21.85V19.075H19.075V16H21.85V21.85ZM12 19Q9.1 19 7.05 16.95Q5 14.9 5 12Q5 9.1 7.05 7.05Q9.1 5 12 5Q14.9 5 16.95 7.05Q19 9.1 19 12Q19 14.9 16.95 16.95Q14.9 19 12 19ZM2.15 8V2.15H8V4.925H4.925V8ZM19.075 8V4.925H16V2.15H21.85V8Z"/>
    </Icon>
  )
});

export default IconMaterialAllOutOutlinedW700Filled;
