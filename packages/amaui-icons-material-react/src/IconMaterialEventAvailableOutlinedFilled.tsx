import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEventAvailableOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventAvailableOutlinedFilled'
      short_name='EventAvailable'

      {...props}
    >
      <path d="M10.95 18.35 7.4 14.8 8.85 13.35 10.95 15.45 15.15 11.25 16.6 12.7ZM5 22Q4.175 22 3.587 21.413Q3 20.825 3 20V6Q3 5.175 3.587 4.588Q4.175 4 5 4H6V2H8V4H16V2H18V4H19Q19.825 4 20.413 4.588Q21 5.175 21 6V20Q21 20.825 20.413 21.413Q19.825 22 19 22ZM5 20H19Q19 20 19 20Q19 20 19 20V10H5V20Q5 20 5 20Q5 20 5 20Z"/>
    </Icon>
  )
});

export default IconMaterialEventAvailableOutlinedFilled;
