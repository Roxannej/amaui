import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScreenShareOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenShareOutlined'
      short_name='ScreenShare'

      {...props}
    >
      <path d="M8 14H10V12Q10 11.575 10.288 11.287Q10.575 11 11 11H13V13L16 10L13 7V9H11Q9.75 9 8.875 9.875Q8 10.75 8 12ZM4 18Q3.175 18 2.588 17.413Q2 16.825 2 16V5Q2 4.175 2.588 3.587Q3.175 3 4 3H20Q20.825 3 21.413 3.587Q22 4.175 22 5V16Q22 16.825 21.413 17.413Q20.825 18 20 18ZM4 16H20Q20 16 20 16Q20 16 20 16V5Q20 5 20 5Q20 5 20 5H4Q4 5 4 5Q4 5 4 5V16Q4 16 4 16Q4 16 4 16ZM2 21Q1.575 21 1.288 20.712Q1 20.425 1 20Q1 19.575 1.288 19.288Q1.575 19 2 19H22Q22.425 19 22.712 19.288Q23 19.575 23 20Q23 20.425 22.712 20.712Q22.425 21 22 21ZM4 16Q4 16 4 16Q4 16 4 16V5Q4 5 4 5Q4 5 4 5Q4 5 4 5Q4 5 4 5V16Q4 16 4 16Q4 16 4 16Z"/>
    </Icon>
  )
});

export default IconMaterialScreenShareOutlined;
