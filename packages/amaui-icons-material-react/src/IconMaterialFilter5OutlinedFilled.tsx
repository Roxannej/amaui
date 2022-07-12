import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilter5OutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter5OutlinedFilled'
      short_name='Filter5'

      {...props}
    >
      <path d="M11 15H15Q15.825 15 16.413 14.412Q17 13.825 17 13V11Q17 10.175 16.413 9.587Q15.825 9 15 9H13V7H17V5H11V11H15Q15 11 15 11Q15 11 15 11V13Q15 13 15 13Q15 13 15 13H11ZM8 18Q7.175 18 6.588 17.413Q6 16.825 6 16V4Q6 3.175 6.588 2.587Q7.175 2 8 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V16Q22 16.825 21.413 17.413Q20.825 18 20 18ZM4 22Q3.175 22 2.588 21.413Q2 20.825 2 20V6H4V20Q4 20 4 20Q4 20 4 20H18V22Z"/>
    </Icon>
  )
});

export default IconMaterialFilter5OutlinedFilled;
