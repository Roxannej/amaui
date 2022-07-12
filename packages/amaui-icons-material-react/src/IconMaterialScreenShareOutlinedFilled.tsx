import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScreenShareOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenShareOutlinedFilled'
      short_name='ScreenShare'

      {...props}
    >
      <path d="M8 14H10V12Q10 11.575 10.288 11.287Q10.575 11 11 11H13V13L16 10L13 7V9H11Q9.75 9 8.875 9.875Q8 10.75 8 12ZM4 18Q3.175 18 2.588 17.413Q2 16.825 2 16V5Q2 4.175 2.588 3.587Q3.175 3 4 3H20Q20.825 3 21.413 3.587Q22 4.175 22 5V16Q22 16.825 21.413 17.413Q20.825 18 20 18ZM2 21Q1.575 21 1.288 20.712Q1 20.425 1 20Q1 19.575 1.288 19.288Q1.575 19 2 19H22Q22.425 19 22.712 19.288Q23 19.575 23 20Q23 20.425 22.712 20.712Q22.425 21 22 21Z"/>
    </Icon>
  )
});

export default IconMaterialScreenShareOutlinedFilled;