import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFloorLampRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FloorLampRoundedFilled'
      short_name='FloorLamp'

      {...props}
    >
      <path d="M12 19q-.425 0-.712-.288Q11 18.425 11 18v-7H6q-.5 0-.8-.4-.3-.4-.15-.9L7 3.4q.2-.65.725-1.025Q8.25 2 8.9 2h6.2q.65 0 1.175.375T17 3.4l1.95 6.3q.15.5-.15.9t-.8.4h-5v7q0 .425-.287.712Q12.425 19 12 19Zm-3 3q-.425 0-.712-.288Q8 21.425 8 21t.288-.712Q8.575 20 9 20h6q.425 0 .713.288.287.287.287.712t-.287.712Q15.425 22 15 22Z"/>
    </Icon>
  )
});

export default IconMaterialFloorLampRoundedFilled;
