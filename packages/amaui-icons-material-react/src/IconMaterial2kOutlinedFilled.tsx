import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial2kOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='2kOutlinedFilled'
      short_name='2k'

      {...props}
    >
      <path d="M13 15H14.5V12.75L16.25 15H18L15.75 12L18 9H16.25L14.5 11.25V9H13ZM6.5 15H11V13.5H8V12.5H10Q10.425 12.5 10.713 12.212Q11 11.925 11 11.5V10Q11 9.575 10.713 9.287Q10.425 9 10 9H6.5V10.5H9.5V11.5H7.5Q7.075 11.5 6.787 11.787Q6.5 12.075 6.5 12.5ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21Z"/>
    </Icon>
  )
});

export default IconMaterial2kOutlinedFilled;
