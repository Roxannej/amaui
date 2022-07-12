import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial1kPlusOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='1kPlusOutlinedFilled'
      short_name='1kPlus'

      {...props}
    >
      <path d="M16.5 14H17.5V12.5H19V11.5H17.5V10H16.5V11.5H15V12.5H16.5ZM10.5 15H12V12.75L13.75 15H15.5L13.25 12L15.5 9H13.75L12 11.25V9H10.5ZM7.5 15H9V9H6V10.5H7.5ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21Z"/>
    </Icon>
  )
});

export default IconMaterial1kPlusOutlinedFilled;
