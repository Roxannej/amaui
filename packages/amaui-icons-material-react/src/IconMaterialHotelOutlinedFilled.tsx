import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHotelOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HotelOutlinedFilled'
      short_name='Hotel'

      {...props}
    >
      <path d="M1 20V5H3V15H11V7H19Q20.65 7 21.825 8.175Q23 9.35 23 11V20H21V17H3V20ZM7 14Q5.75 14 4.875 13.125Q4 12.25 4 11Q4 9.75 4.875 8.875Q5.75 8 7 8Q8.25 8 9.125 8.875Q10 9.75 10 11Q10 12.25 9.125 13.125Q8.25 14 7 14Z"/>
    </Icon>
  )
});

export default IconMaterialHotelOutlinedFilled;
