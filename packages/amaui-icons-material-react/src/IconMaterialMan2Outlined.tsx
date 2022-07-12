import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMan2Outlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Man2Outlined'
      short_name='Man2'

      {...props}
    >
      <path d="M10.5 22v-7H8V9q0-.825.588-1.413Q9.175 7 10 7h4q.825 0 1.413.587Q16 8.175 16 9v6h-2.5v7ZM12 6q-.825 0-1.412-.588Q10 4.825 10 4t.588-1.413Q11.175 2 12 2t1.413.587Q14 3.175 14 4q0 .825-.587 1.412Q12.825 6 12 6Z"/>
    </Icon>
  )
});

export default IconMaterialMan2Outlined;
