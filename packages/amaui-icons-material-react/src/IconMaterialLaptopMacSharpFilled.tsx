import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLaptopMacSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LaptopMacSharpFilled'
      short_name='LaptopMac'

      {...props}
    >
      <path d="M0 20V18H4L2 16V3H22V16L20 18H24V20ZM12 19Q12.425 19 12.713 18.712Q13 18.425 13 18Q13 17.575 12.713 17.288Q12.425 17 12 17Q11.575 17 11.288 17.288Q11 17.575 11 18Q11 18.425 11.288 18.712Q11.575 19 12 19Z"/>
    </Icon>
  )
});

export default IconMaterialLaptopMacSharpFilled;
