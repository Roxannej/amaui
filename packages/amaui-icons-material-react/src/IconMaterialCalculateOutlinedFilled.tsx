import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCalculateOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalculateOutlinedFilled'
      short_name='Calculate'

      {...props}
    >
      <path d="M6.25 9.2H11.25V7.7H6.25ZM13 17.25H18V15.75H13ZM13 14.75H18V13.25H13ZM8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8ZM14.1 10.95 15.5 9.55 16.9 10.95 17.95 9.9 16.55 8.45 17.95 7.05 16.9 6 15.5 7.4 14.1 6 13.05 7.05 14.45 8.45 13.05 9.9ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21Z"/>
    </Icon>
  )
});

export default IconMaterialCalculateOutlinedFilled;
