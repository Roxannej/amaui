import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddLocationAltOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddLocationAltOutlinedFilled'
      short_name='AddLocationAlt'

      {...props}
    >
      <path d="M18 8V5H15V3H18V0H20V3H23V5H20V8ZM12 12Q12.825 12 13.413 11.412Q14 10.825 14 10Q14 9.175 13.413 8.587Q12.825 8 12 8Q11.175 8 10.588 8.587Q10 9.175 10 10Q10 10.825 10.588 11.412Q11.175 12 12 12ZM12 22Q7.975 18.575 5.988 15.637Q4 12.7 4 10.2Q4 6.45 6.413 4.225Q8.825 2 12 2Q12.5 2 13 2.062Q13.5 2.125 14 2.25V6H17V9H19.925Q19.975 9.3 19.988 9.6Q20 9.9 20 10.2Q20 12.7 18.013 15.637Q16.025 18.575 12 22Z"/>
    </Icon>
  )
});

export default IconMaterialAddLocationAltOutlinedFilled;
