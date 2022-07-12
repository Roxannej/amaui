import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChairOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChairOutlinedFilled'
      short_name='Chair'

      {...props}
    >
      <path d="M5 21Q4.575 21 4.287 20.712Q4 20.425 4 20V19Q2.75 19 1.875 18.125Q1 17.25 1 16V11Q1 10.175 1.588 9.587Q2.175 9 3 9Q3.825 9 4.412 9.587Q5 10.175 5 11V15H19V11Q19 10.175 19.587 9.587Q20.175 9 21 9Q21.825 9 22.413 9.587Q23 10.175 23 11V16Q23 17.25 22.125 18.125Q21.25 19 20 19V20Q20 20.425 19.712 20.712Q19.425 21 19 21Q18.575 21 18.288 20.712Q18 20.425 18 20V19H6V20Q6 20.425 5.713 20.712Q5.425 21 5 21ZM7 13V11Q7 9.625 6.162 8.537Q5.325 7.45 4 7V6Q4 4.75 4.875 3.875Q5.75 3 7 3H17Q18.25 3 19.125 3.875Q20 4.75 20 6V7Q18.65 7.35 17.825 8.462Q17 9.575 17 11V13Z"/>
    </Icon>
  )
});

export default IconMaterialChairOutlinedFilled;
