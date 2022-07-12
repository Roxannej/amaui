import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialContentCopyOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContentCopyOutlinedFilled'
      short_name='ContentCopy'

      {...props}
    >
      <path d="M9 18Q8.175 18 7.588 17.413Q7 16.825 7 16V4Q7 3.175 7.588 2.587Q8.175 2 9 2H18Q18.825 2 19.413 2.587Q20 3.175 20 4V16Q20 16.825 19.413 17.413Q18.825 18 18 18ZM5 22Q4.175 22 3.587 21.413Q3 20.825 3 20V6H5V20Q5 20 5 20Q5 20 5 20H16V22Z"/>
    </Icon>
  )
});

export default IconMaterialContentCopyOutlinedFilled;
