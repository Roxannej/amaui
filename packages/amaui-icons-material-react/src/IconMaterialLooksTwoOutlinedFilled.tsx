import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLooksTwoOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LooksTwoOutlinedFilled'
      short_name='LooksTwo'

      {...props}
    >
      <path d="M9 17H15V15H11V13Q11 13 11 13Q11 13 11 13H13Q13.825 13 14.413 12.412Q15 11.825 15 11V9Q15 8.175 14.413 7.587Q13.825 7 13 7H9V9H13Q13 9 13 9Q13 9 13 9V11Q13 11 13 11Q13 11 13 11H11Q10.175 11 9.588 11.587Q9 12.175 9 13ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21Z"/>
    </Icon>
  )
});

export default IconMaterialLooksTwoOutlinedFilled;
