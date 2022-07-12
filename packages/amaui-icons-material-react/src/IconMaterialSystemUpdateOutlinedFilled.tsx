import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSystemUpdateOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SystemUpdateOutlinedFilled'
      short_name='SystemUpdate'

      {...props}
    >
      <path d="M16 12 12 16 8 12 9.4 10.6 11 12.15V8H13V12.15L14.6 10.6ZM7 23Q6.175 23 5.588 22.413Q5 21.825 5 21V3Q5 2.175 5.588 1.587Q6.175 1 7 1H17Q17.825 1 18.413 1.587Q19 2.175 19 3V21Q19 21.825 18.413 22.413Q17.825 23 17 23ZM7 18H17V6H7Z"/>
    </Icon>
  )
});

export default IconMaterialSystemUpdateOutlinedFilled;
