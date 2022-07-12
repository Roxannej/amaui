import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRoomServiceRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoomServiceRounded'
      short_name='RoomService'

      {...props}
    >
      <path d="M3 19Q2.575 19 2.288 18.712Q2 18.425 2 18Q2 17.575 2.288 17.288Q2.575 17 3 17H21Q21.425 17 21.712 17.288Q22 17.575 22 18Q22 18.425 21.712 18.712Q21.425 19 21 19ZM3 16V15Q3 11.8 4.963 9.35Q6.925 6.9 10 6.25V6Q10 5.175 10.588 4.588Q11.175 4 12 4Q12.825 4 13.413 4.588Q14 5.175 14 6V6.25Q17.1 6.9 19.05 9.35Q21 11.8 21 15V16ZM5.05 14H18.95Q18.6 11.4 16.625 9.7Q14.65 8 12 8Q9.35 8 7.388 9.7Q5.425 11.4 5.05 14ZM12 14Q12 14 12 14Q12 14 12 14Q12 14 12 14Q12 14 12 14Z"/>
    </Icon>
  )
});

export default IconMaterialRoomServiceRounded;
