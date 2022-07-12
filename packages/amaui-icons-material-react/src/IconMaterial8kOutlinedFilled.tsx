import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial8kOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='8kOutlinedFilled'
      short_name='8k'

      {...props}
    >
      <path d="M13 15H14.5V12.75L16.25 15H18L15.75 12L18 9H16.25L14.5 11.25V9H13ZM7.5 15H10Q10.425 15 10.713 14.712Q11 14.425 11 14V10Q11 9.575 10.713 9.287Q10.425 9 10 9H7.5Q7.075 9 6.787 9.287Q6.5 9.575 6.5 10V14Q6.5 14.425 6.787 14.712Q7.075 15 7.5 15ZM8 11.5V10H9.5V11.5ZM8 14V12.5H9.5V14ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21Z"/>
    </Icon>
  )
});

export default IconMaterial8kOutlinedFilled;
