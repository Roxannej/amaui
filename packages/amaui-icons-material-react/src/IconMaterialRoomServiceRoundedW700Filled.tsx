import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRoomServiceRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoomServiceRoundedW700Filled'
      short_name='RoomService'

      {...props}
    >
      <path d="M2.725 21Q2.075 21 1.613 20.538Q1.15 20.075 1.15 19.425Q1.15 18.775 1.613 18.312Q2.075 17.85 2.725 17.85H21.275Q21.925 17.85 22.388 18.312Q22.85 18.775 22.85 19.425Q22.85 20.075 22.388 20.538Q21.925 21 21.275 21ZM2.15 16.85V15Q2.15 11.725 4.088 9.1Q6.025 6.475 9.15 5.6V5.55Q9.15 4.375 9.988 3.537Q10.825 2.7 12 2.7Q13.175 2.7 14.013 3.537Q14.85 4.375 14.85 5.55V5.6Q18 6.475 19.925 9.1Q21.85 11.725 21.85 15V16.85Z"/>
    </Icon>
  )
});

export default IconMaterialRoomServiceRoundedW700Filled;