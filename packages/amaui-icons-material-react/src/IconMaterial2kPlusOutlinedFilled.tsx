import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial2kPlusOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='2kPlusOutlinedFilled'
      short_name='2kPlus'

      {...props}
    >
      <path d="M16.5 14H17.5V12.5H19V11.5H17.5V10H16.5V11.5H15V12.5H16.5ZM11 15H12.5V12.75L14.25 15H16L13.75 12L16 9H14.25L12.5 11.25V9H11ZM6 15H10V13.5H7.5V12.5H9Q9.425 12.5 9.713 12.212Q10 11.925 10 11.5V10Q10 9.575 9.713 9.287Q9.425 9 9 9H6V10.5H8.5V11.5H7Q6.575 11.5 6.287 11.787Q6 12.075 6 12.5ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21Z"/>
    </Icon>
  )
});

export default IconMaterial2kPlusOutlinedFilled;
