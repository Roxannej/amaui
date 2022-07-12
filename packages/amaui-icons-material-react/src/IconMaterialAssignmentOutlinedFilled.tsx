import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAssignmentOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssignmentOutlinedFilled'
      short_name='Assignment'

      {...props}
    >
      <path d="M7 17H14V15H7ZM7 13H17V11H7ZM7 9H17V7H7ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H9.2Q9.525 2.1 10.288 1.55Q11.05 1 12 1Q12.95 1 13.713 1.55Q14.475 2.1 14.8 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM12 4.25Q12.325 4.25 12.538 4.037Q12.75 3.825 12.75 3.5Q12.75 3.175 12.538 2.962Q12.325 2.75 12 2.75Q11.675 2.75 11.463 2.962Q11.25 3.175 11.25 3.5Q11.25 3.825 11.463 4.037Q11.675 4.25 12 4.25Z"/>
    </Icon>
  )
});

export default IconMaterialAssignmentOutlinedFilled;
