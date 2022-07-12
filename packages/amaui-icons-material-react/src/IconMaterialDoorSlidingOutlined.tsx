import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoorSlidingOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorSlidingOutlined'
      short_name='DoorSliding'

      {...props}
    >
      <path d="M9 13Q8.575 13 8.288 12.712Q8 12.425 8 12Q8 11.575 8.288 11.287Q8.575 11 9 11Q9.425 11 9.713 11.287Q10 11.575 10 12Q10 12.425 9.713 12.712Q9.425 13 9 13ZM15 13Q14.575 13 14.288 12.712Q14 12.425 14 12Q14 11.575 14.288 11.287Q14.575 11 15 11Q15.425 11 15.713 11.287Q16 11.575 16 12Q16 12.425 15.713 12.712Q15.425 13 15 13ZM3 21V19H4V5Q4 4.175 4.588 3.587Q5.175 3 6 3H18Q18.825 3 19.413 3.587Q20 4.175 20 5V19H21V21ZM6 19H11V5H6Q6 5 6 5Q6 5 6 5ZM13 19H18V5Q18 5 18 5Q18 5 18 5H13ZM12 11Q12 11 12 11Q12 11 12 11Q12 11 12 11Q12 11 12 11Z"/>
    </Icon>
  )
});

export default IconMaterialDoorSlidingOutlined;
