import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMarkunreadMailboxOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkunreadMailboxOutlinedFilled'
      short_name='MarkunreadMailbox'

      {...props}
    >
      <path d="M4 22Q3.175 22 2.588 21.413Q2 20.825 2 20V10Q2 9.175 2.588 8.587Q3.175 8 4 8H6V2H14V6H8V14H10V8H20Q20.825 8 21.413 8.587Q22 9.175 22 10V20Q22 20.825 21.413 21.413Q20.825 22 20 22Z"/>
    </Icon>
  )
});

export default IconMaterialMarkunreadMailboxOutlinedFilled;
