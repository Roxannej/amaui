import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlashlightOnRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashlightOnRoundedW700Filled'
      short_name='FlashlightOn'

      {...props}
    >
      <path d="M10.3 23Q9 23 8.075 22.075Q7.15 21.15 7.15 19.85V11.425L5.15 8.425V7.15H18.85V8.425L16.85 11.425V19.85Q16.85 21.15 15.925 22.075Q15 23 13.7 23ZM12 15.35Q12.5 15.35 12.85 15Q13.2 14.65 13.2 14.15Q13.2 13.65 12.85 13.3Q12.5 12.95 12 12.95Q11.5 12.95 11.15 13.3Q10.8 13.65 10.8 14.15Q10.8 14.65 11.15 15Q11.5 15.35 12 15.35ZM5.15 5.15V4.15Q5.15 2.85 6.075 1.925Q7 1 8.3 1H15.7Q17 1 17.925 1.925Q18.85 2.85 18.85 4.15V5.15Z"/>
    </Icon>
  )
});

export default IconMaterialFlashlightOnRoundedW700Filled;
