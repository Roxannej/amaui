import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEventOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventOutlined'
      short_name='Event'

      {...props}
    >
      <path d="M14.5 18Q13.45 18 12.725 17.275Q12 16.55 12 15.5Q12 14.45 12.725 13.725Q13.45 13 14.5 13Q15.55 13 16.275 13.725Q17 14.45 17 15.5Q17 16.55 16.275 17.275Q15.55 18 14.5 18ZM5 22Q4.175 22 3.587 21.413Q3 20.825 3 20V6Q3 5.175 3.587 4.588Q4.175 4 5 4H6V2H8V4H16V2H18V4H19Q19.825 4 20.413 4.588Q21 5.175 21 6V20Q21 20.825 20.413 21.413Q19.825 22 19 22ZM5 20H19Q19 20 19 20Q19 20 19 20V10H5V20Q5 20 5 20Q5 20 5 20ZM5 8H19V6Q19 6 19 6Q19 6 19 6H5Q5 6 5 6Q5 6 5 6ZM5 8V6Q5 6 5 6Q5 6 5 6Q5 6 5 6Q5 6 5 6V8Z"/>
    </Icon>
  )
});

export default IconMaterialEventOutlined;