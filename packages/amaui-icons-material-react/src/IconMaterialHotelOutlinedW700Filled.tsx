import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHotelOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HotelOutlinedW700Filled'
      short_name='Hotel'

      {...props}
    >
      <path d="M0.225 21.15V4.425H3V15H11.375V6.425H19Q20.975 6.425 22.375 7.825Q23.775 9.225 23.775 11.2V21.15H21V18.15H3V21.15ZM7.2 14.2Q5.8 14.2 4.8 13.2Q3.8 12.2 3.8 10.8Q3.8 9.4 4.8 8.412Q5.8 7.425 7.2 7.425Q8.6 7.425 9.588 8.412Q10.575 9.4 10.575 10.8Q10.575 12.2 9.588 13.2Q8.6 14.2 7.2 14.2Z"/>
    </Icon>
  )
});

export default IconMaterialHotelOutlinedW700Filled;