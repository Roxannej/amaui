import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMpOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MpOutlinedFilled'
      short_name='Mp'

      {...props}
    >
      <path d="M13.5 15H15V13.5H17Q17.425 13.5 17.712 13.212Q18 12.925 18 12.5V10Q18 9.575 17.712 9.287Q17.425 9 17 9H13.5ZM15 12V10.5H16.5V12ZM6 15H7.5V10.5H8.5V13.5H10V10.5H11V15H12.5V10Q12.5 9.575 12.213 9.287Q11.925 9 11.5 9H7Q6.575 9 6.287 9.287Q6 9.575 6 10ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21Z"/>
    </Icon>
  )
});

export default IconMaterialMpOutlinedFilled;
