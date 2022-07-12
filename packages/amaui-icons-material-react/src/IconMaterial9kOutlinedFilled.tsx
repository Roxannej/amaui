import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial9kOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='9kOutlinedFilled'
      short_name='9k'

      {...props}
    >
      <path d="M13 15H14.5V12.75L16.25 15H18L15.75 12L18 9H16.25L14.5 11.25V9H13ZM6.5 15H10Q10.425 15 10.713 14.712Q11 14.425 11 14V10Q11 9.575 10.713 9.287Q10.425 9 10 9H7.5Q7.075 9 6.787 9.287Q6.5 9.575 6.5 10V11.5Q6.5 11.925 6.787 12.212Q7.075 12.5 7.5 12.5H9.5V13.5H6.5ZM8 11.5V10H9.5V11.5ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21Z"/>
    </Icon>
  )
});

export default IconMaterial9kOutlinedFilled;