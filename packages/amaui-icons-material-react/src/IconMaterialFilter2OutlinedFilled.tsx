import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilter2OutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter2OutlinedFilled'
      short_name='Filter2'

      {...props}
    >
      <path d="M11 15H17V13H13V11Q13 11 13 11Q13 11 13 11H15Q15.825 11 16.413 10.412Q17 9.825 17 9V7Q17 6.175 16.413 5.588Q15.825 5 15 5H11V7H15Q15 7 15 7Q15 7 15 7V9Q15 9 15 9Q15 9 15 9H13Q12.175 9 11.588 9.587Q11 10.175 11 11ZM8 18Q7.175 18 6.588 17.413Q6 16.825 6 16V4Q6 3.175 6.588 2.587Q7.175 2 8 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V16Q22 16.825 21.413 17.413Q20.825 18 20 18ZM4 22Q3.175 22 2.588 21.413Q2 20.825 2 20V6H4V20Q4 20 4 20Q4 20 4 20H18V22Z"/>
    </Icon>
  )
});

export default IconMaterialFilter2OutlinedFilled;
