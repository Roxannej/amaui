import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialThumbUpOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbUpOutlinedFilled'
      short_name='ThumbUp'

      {...props}
    >
      <path d="M9 21Q8.175 21 7.588 20.413Q7 19.825 7 19V9Q7 8.6 7.15 8.238Q7.3 7.875 7.575 7.6L14.175 1L15.225 2.05Q15.425 2.25 15.562 2.537Q15.7 2.825 15.675 3.1L15.65 3.425L14.7 8H21Q21.825 8 22.413 8.587Q23 9.175 23 10V12Q23 12.175 22.962 12.362Q22.925 12.55 22.85 12.725L19.85 19.775Q19.625 20.325 19.125 20.663Q18.625 21 18 21ZM1 21H5V9H1Z"/>
    </Icon>
  )
});

export default IconMaterialThumbUpOutlinedFilled;
