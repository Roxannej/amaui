import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHardwareOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HardwareOutlinedFilled'
      short_name='Hardware'

      {...props}
    >
      <path d="M9 11V8H4Q4 5.925 5.463 4.463Q6.925 3 9 3H15V6L18 3H20V11H18L15 8V11ZM10 21Q9.575 21 9.288 20.712Q9 20.425 9 20V13H15V20Q15 20.425 14.713 20.712Q14.425 21 14 21Z"/>
    </Icon>
  )
});

export default IconMaterialHardwareOutlinedFilled;