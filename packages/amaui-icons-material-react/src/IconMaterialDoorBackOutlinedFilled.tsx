import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoorBackOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorBackOutlinedFilled'
      short_name='DoorBack'

      {...props}
    >
      <path d="M3 21V19H5V5Q5 4.175 5.588 3.587Q6.175 3 7 3H17Q17.825 3 18.413 3.587Q19 4.175 19 5V19H21V21ZM10 13Q10.425 13 10.713 12.712Q11 12.425 11 12Q11 11.575 10.713 11.287Q10.425 11 10 11Q9.575 11 9.288 11.287Q9 11.575 9 12Q9 12.425 9.288 12.712Q9.575 13 10 13Z"/>
    </Icon>
  )
});

export default IconMaterialDoorBackOutlinedFilled;