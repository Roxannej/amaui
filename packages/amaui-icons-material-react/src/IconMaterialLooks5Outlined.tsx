import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLooks5Outlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Looks5Outlined'
      short_name='Looks5'

      {...props}
    >
      <path d="M9 17H13Q13.825 17 14.413 16.413Q15 15.825 15 15V13Q15 12.175 14.413 11.587Q13.825 11 13 11H11V9H15V7H9V13H13Q13 13 13 13Q13 13 13 13V15Q13 15 13 15Q13 15 13 15H9ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM5 19H19Q19 19 19 19Q19 19 19 19V5Q19 5 19 5Q19 5 19 5H5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19ZM5 5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19Q5 19 5 19Q5 19 5 19V5Q5 5 5 5Q5 5 5 5Z"/>
    </Icon>
  )
});

export default IconMaterialLooks5Outlined;
