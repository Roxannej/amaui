import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRequestPageOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RequestPageOutlinedFilled'
      short_name='RequestPage'

      {...props}
    >
      <path d="M11 18H13V17H14Q14.425 17 14.713 16.712Q15 16.425 15 16V13Q15 12.575 14.713 12.287Q14.425 12 14 12H11V11H15V9H13V8H11V9H10Q9.575 9 9.288 9.287Q9 9.575 9 10V13Q9 13.425 9.288 13.712Q9.575 14 10 14H13V15H9V17H11ZM18 22H6Q5.175 22 4.588 21.413Q4 20.825 4 20V4Q4 3.175 4.588 2.587Q5.175 2 6 2H14L20 8V20Q20 20.825 19.413 21.413Q18.825 22 18 22Z"/>
    </Icon>
  )
});

export default IconMaterialRequestPageOutlinedFilled;