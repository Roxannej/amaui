import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEvChargerOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EvChargerOutlinedFilled'
      short_name='EvCharger'

      {...props}
    >
      <path d="m8.5 19 2.5-4H9.5v-3L7 16h1.5ZM6 10h6V5H6ZM4 21V5q0-.825.588-1.413Q5.175 3 6 3h6q.825 0 1.413.587Q14 4.175 14 5v7h1q.825 0 1.413.587Q17 13.175 17 14v4.5q0 .425.35.712.35.288.775.288.45 0 .788-.288.337-.287.337-.712V9H19q-.425 0-.712-.288Q18 8.425 18 8V6h.5V4.5h1V6h1V4.5h1V6h.5v2q0 .425-.288.712Q21.425 9 21 9h-.25v9.5q0 1.05-.762 1.775-.763.725-1.863.725-1.075 0-1.85-.725-.775-.725-.775-1.775v-5H14V21Z"/>
    </Icon>
  )
});

export default IconMaterialEvChargerOutlinedFilled;