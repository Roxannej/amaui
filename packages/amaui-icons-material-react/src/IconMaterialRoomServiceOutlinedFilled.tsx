import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRoomServiceOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoomServiceOutlinedFilled'
      short_name='RoomService'

      {...props}
    >
      <path d="M2 19V17H22V19ZM3 16V15Q3 11.8 4.963 9.35Q6.925 6.9 10 6.25V6Q10 5.175 10.588 4.588Q11.175 4 12 4Q12.825 4 13.413 4.588Q14 5.175 14 6V6.25Q17.1 6.9 19.05 9.35Q21 11.8 21 15V16Z"/>
    </Icon>
  )
});

export default IconMaterialRoomServiceOutlinedFilled;
