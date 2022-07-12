import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFloorLampRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FloorLampRoundedW700Filled'
      short_name='FloorLamp'

      {...props}
    >
      <path d="M12 18.975q-.65 0-1.112-.462-.463-.463-.463-1.113V11H6.1q-.8 0-1.275-.637Q4.35 9.725 4.6 8.95l1.775-5.725q.3-1 1.125-1.613Q8.325 1 9.375 1h5.25q1.05 0 1.875.612.825.613 1.125 1.613L19.4 8.95q.25.775-.225 1.413Q18.7 11 17.9 11h-4.325v6.4q0 .65-.462 1.113-.463.462-1.113.462Zm-3 4.15q-.65 0-1.112-.462-.463-.463-.463-1.113 0-.65.463-1.112.462-.463 1.112-.463h6q.65 0 1.113.463.462.462.462 1.112 0 .65-.462 1.113-.463.462-1.113.462Z"/>
    </Icon>
  )
});

export default IconMaterialFloorLampRoundedW700Filled;
