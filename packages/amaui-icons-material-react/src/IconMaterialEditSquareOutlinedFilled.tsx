import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditSquareOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditSquareOutlinedFilled'
      short_name='EditSquare'

      {...props}
    >
      <path d="M5 23.7q-.825 0-1.413-.588Q3 22.525 3 21.7v-14q0-.825.587-1.413Q4.175 5.7 5 5.7h8.925L7 12.625V19.7h7.075L21 12.75v8.95q0 .825-.587 1.412-.588.588-1.413.588Zm4-6v-4.25l7.175-7.175 4.275 4.2-7.2 7.225Zm12.875-8.65L17.6 4.85l1.075-1.075q.6-.6 1.438-.6.837 0 1.412.6l1.4 1.425q.575.575.575 1.4T22.925 8Z"/>
    </Icon>
  )
});

export default IconMaterialEditSquareOutlinedFilled;
