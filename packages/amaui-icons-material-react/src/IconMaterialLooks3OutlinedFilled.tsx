import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLooks3OutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Looks3OutlinedFilled'
      short_name='Looks3'

      {...props}
    >
      <path d="M9 17H13Q13.825 17 14.413 16.413Q15 15.825 15 15V13.5Q15 12.85 14.575 12.425Q14.15 12 13.5 12Q14.15 12 14.575 11.575Q15 11.15 15 10.5V9Q15 8.175 14.413 7.587Q13.825 7 13 7H9V9H13Q13 9 13 9Q13 9 13 9V11Q13 11 13 11Q13 11 13 11H11V13H13Q13 13 13 13Q13 13 13 13V15Q13 15 13 15Q13 15 13 15H9ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21Z"/>
    </Icon>
  )
});

export default IconMaterialLooks3OutlinedFilled;
