import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrokenImageOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrokenImageOutlinedFilled'
      short_name='BrokenImage'

      {...props}
    >
      <path d="M6 12.575 3 9.575V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V11.575L18 8.575L14 12.575L10 8.575ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V12.4L6 15.4L10 11.4L14 15.4L18 11.4L21 14.4V19Q21 19.825 20.413 20.413Q19.825 21 19 21Z"/>
    </Icon>
  )
});

export default IconMaterialBrokenImageOutlinedFilled;
