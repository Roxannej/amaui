import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMarkEmailReadOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkEmailReadOutlinedFilled'
      short_name='MarkEmailRead'

      {...props}
    >
      <path d="M15.95 22 11.7 17.75 13.1 16.35 15.95 19.2 21.6 13.55 23 14.95ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V10.35L15.975 16.375L13.1 13.5L8.875 17.725L11.15 20ZM12 13 20 8V6L12 11L4 6V8Z"/>
    </Icon>
  )
});

export default IconMaterialMarkEmailReadOutlinedFilled;
