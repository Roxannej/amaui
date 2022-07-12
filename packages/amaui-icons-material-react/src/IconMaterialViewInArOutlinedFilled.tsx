import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewInArOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewInArOutlinedFilled'
      short_name='ViewInAr'

      {...props}
    >
      <path d="M4 23Q2.75 23 1.875 22.125Q1 21.25 1 20V18H3V20Q3 20.425 3.288 20.712Q3.575 21 4 21H6V23ZM18 23V21H20Q20.425 21 20.712 20.712Q21 20.425 21 20V18H23V20Q23 21.25 22.125 22.125Q21.25 23 20 23ZM11.25 19.75 5.75 16.55Q5.4 16.35 5.2 16Q5 15.65 5 15.25V8.9Q5 8.5 5.2 8.15Q5.4 7.8 5.75 7.6L11.25 4.4Q11.6 4.2 12 4.2Q12.4 4.2 12.75 4.4L18.25 7.6Q18.6 7.8 18.8 8.15Q19 8.5 19 8.9V15.25Q19 15.65 18.8 16Q18.6 16.35 18.25 16.55L12.75 19.75Q12.4 19.95 12 19.95Q11.6 19.95 11.25 19.75ZM11 17.25 12 17.825 13 17.25V12.65L17 10.35V9.175L16 8.6L12 10.9L8 8.6L7 9.175V10.35L11 12.65ZM1 6V4Q1 2.75 1.875 1.875Q2.75 1 4 1H6V3H4Q3.575 3 3.288 3.287Q3 3.575 3 4V6ZM21 6V4Q21 3.575 20.712 3.287Q20.425 3 20 3H18V1H20Q21.25 1 22.125 1.875Q23 2.75 23 4V6Z"/>
    </Icon>
  )
});

export default IconMaterialViewInArOutlinedFilled;
