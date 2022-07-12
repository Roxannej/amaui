import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAodTabletOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AodTabletOutlinedFilled'
      short_name='AodTablet'

      {...props}
    >
      <path d="M8 11.5V10h8v1.5Zm1 3V13h6v1.5ZM3 20q-.825 0-1.412-.587Q1 18.825 1 18V6q0-.825.588-1.412Q2.175 4 3 4h18q.825 0 1.413.588Q23 5.175 23 6v12q0 .825-.587 1.413Q21.825 20 21 20Zm3-2h12V6H6Z"/>
    </Icon>
  )
});

export default IconMaterialAodTabletOutlinedFilled;
