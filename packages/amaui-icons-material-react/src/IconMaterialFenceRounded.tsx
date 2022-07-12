import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFenceRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FenceRounded'
      short_name='Fence'

      {...props}
    >
      <path d="M6 20Q5.575 20 5.287 19.712Q5 19.425 5 19V16H4Q3.575 16 3.288 15.712Q3 15.425 3 15Q3 14.575 3.288 14.287Q3.575 14 4 14H5V12H4Q3.575 12 3.288 11.712Q3 11.425 3 11Q3 10.575 3.288 10.287Q3.575 10 4 10H5V7.425Q5 7.225 5.075 7.037Q5.15 6.85 5.3 6.7L7.3 4.7Q7.6 4.4 8 4.4Q8.4 4.4 8.7 4.7L10 6L11.3 4.7Q11.6 4.4 12.013 4.4Q12.425 4.4 12.725 4.7L14.025 6L15.3 4.7Q15.6 4.4 16.013 4.4Q16.425 4.4 16.725 4.7L18.725 6.7Q18.875 6.85 18.95 7.037Q19.025 7.225 19.025 7.425V10H20Q20.425 10 20.712 10.287Q21 10.575 21 11Q21 11.425 20.712 11.712Q20.425 12 20 12H19.025V14H20Q20.425 14 20.712 14.287Q21 14.575 21 15Q21 15.425 20.712 15.712Q20.425 16 20 16H19.025V19Q19.025 19.425 18.738 19.712Q18.45 20 18.025 20ZM7 10H9V7.825L8 6.825L7 7.825ZM11 10H13V7.825L12 6.825L11 7.825ZM15.025 10H17V7.825L16 6.825L15.025 7.8ZM7 14H9V12H7ZM11 14H13V12H11ZM15.025 14H17V12H15.025ZM7 18H9V16H7ZM11 18H13V16H11ZM15.025 18H17V16H15.025Z"/>
    </Icon>
  )
});

export default IconMaterialFenceRounded;
