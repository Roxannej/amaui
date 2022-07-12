import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial5kOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='5kOutlinedFilled'
      short_name='5k'

      {...props}
    >
      <path d="M13 15H14.5V12.75L16.25 15H18L15.75 12L18 9H16.25L14.5 11.25V9H13ZM6.5 15H10Q10.425 15 10.713 14.712Q11 14.425 11 14V12.5Q11 12.075 10.713 11.787Q10.425 11.5 10 11.5H8V10.5H11V9H6.5V12.5H9.5V13.5H6.5ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21Z"/>
    </Icon>
  )
});

export default IconMaterial5kOutlinedFilled;
