import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMmsOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MmsOutlinedFilled'
      short_name='Mms'

      {...props}
    >
      <path d="M6 14H18L14.25 9L11.25 13L9 10ZM2 22V4Q2 3.175 2.588 2.587Q3.175 2 4 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V16Q22 16.825 21.413 17.413Q20.825 18 20 18H6Z"/>
    </Icon>
  )
});

export default IconMaterialMmsOutlinedFilled;