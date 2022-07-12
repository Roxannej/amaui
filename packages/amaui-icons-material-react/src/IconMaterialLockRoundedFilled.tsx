import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLockRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LockRoundedFilled'
      short_name='Lock'

      {...props}
    >
      <path d="M12 1Q14.075 1 15.538 2.462Q17 3.925 17 6V8H18Q18.825 8 19.413 8.587Q20 9.175 20 10V20Q20 20.825 19.413 21.413Q18.825 22 18 22H6Q5.175 22 4.588 21.413Q4 20.825 4 20V10Q4 9.175 4.588 8.587Q5.175 8 6 8H7V6Q7 3.925 8.463 2.462Q9.925 1 12 1ZM12 3Q10.75 3 9.875 3.875Q9 4.75 9 6V8H15V6Q15 4.75 14.125 3.875Q13.25 3 12 3ZM12 13Q11.175 13 10.588 13.587Q10 14.175 10 15Q10 15.825 10.588 16.413Q11.175 17 12 17Q12.825 17 13.413 16.413Q14 15.825 14 15Q14 14.175 13.413 13.587Q12.825 13 12 13Z"/>
    </Icon>
  )
});

export default IconMaterialLockRoundedFilled;
