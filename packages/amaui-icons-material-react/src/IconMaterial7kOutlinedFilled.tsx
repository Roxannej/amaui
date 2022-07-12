import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial7kOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='7kOutlinedFilled'
      short_name='7k'

      {...props}
    >
      <path d="M13 15H14.5V12.75L16.25 15H18L15.75 12L18 9H16.25L14.5 11.25V9H13ZM7.75 15H9.5L10.95 10.3Q11.1 9.8 10.8 9.4Q10.5 9 10 9H6.5V10.5H9.15ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21Z"/>
    </Icon>
  )
});

export default IconMaterial7kOutlinedFilled;
