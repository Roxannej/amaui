import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial8kPlusOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='8kPlusOutlinedFilled'
      short_name='8kPlus'

      {...props}
    >
      <path d="M16.5 14H17.5V12.5H19V11.5H17.5V10H16.5V11.5H15V12.5H16.5ZM11 15H12.5V12.75L14.25 15H16L13.75 12L16 9H14.25L12.5 11.25V9H11ZM7 15H9.5Q9.925 15 10.213 14.712Q10.5 14.425 10.5 14V10Q10.5 9.575 10.213 9.287Q9.925 9 9.5 9H7Q6.575 9 6.287 9.287Q6 9.575 6 10V14Q6 14.425 6.287 14.712Q6.575 15 7 15ZM7.5 11.5V10H9V11.5ZM7.5 14V12.5H9V14ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21Z"/>
    </Icon>
  )
});

export default IconMaterial8kPlusOutlinedFilled;
