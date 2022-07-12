import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoorSlidingOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorSlidingOutlinedFilled'
      short_name='DoorSliding'

      {...props}
    >
      <path d="M9 13Q9.425 13 9.713 12.712Q10 12.425 10 12Q10 11.575 9.713 11.287Q9.425 11 9 11Q8.575 11 8.288 11.287Q8 11.575 8 12Q8 12.425 8.288 12.712Q8.575 13 9 13ZM15 13Q15.425 13 15.713 12.712Q16 12.425 16 12Q16 11.575 15.713 11.287Q15.425 11 15 11Q14.575 11 14.288 11.287Q14 11.575 14 12Q14 12.425 14.288 12.712Q14.575 13 15 13ZM3 21V19H4V5Q4 4.175 4.588 3.587Q5.175 3 6 3H11.5V19H12.5V3H18Q18.825 3 19.413 3.587Q20 4.175 20 5V19H21V21Z"/>
    </Icon>
  )
});

export default IconMaterialDoorSlidingOutlinedFilled;
