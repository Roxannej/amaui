import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUnarchiveOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnarchiveOutlinedFilled'
      short_name='Unarchive'

      {...props}
    >
      <path d="M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V6.5Q3 6.15 3.125 5.837Q3.25 5.525 3.45 5.25L4.85 3.55Q5.05 3.275 5.35 3.137Q5.65 3 6 3H18Q18.35 3 18.65 3.137Q18.95 3.275 19.15 3.55L20.55 5.25Q20.75 5.525 20.875 5.837Q21 6.15 21 6.5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM5.4 6H18.6L17.75 5H6.25ZM11 17H13V12.8L14.6 14.4L16 13L12 9L8 13L9.4 14.4L11 12.8Z"/>
    </Icon>
  )
});

export default IconMaterialUnarchiveOutlinedFilled;
