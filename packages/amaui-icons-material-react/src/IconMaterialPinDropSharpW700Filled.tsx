import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPinDropSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinDropSharpW700Filled'
      short_name='PinDrop'

      {...props}
    >
      <path d="M12 19.575Q11.525 19.575 11.15 19.3Q10.775 19.025 10.65 18.6Q10.15 17.025 9.213 15.75Q8.275 14.475 7.363 13.238Q6.45 12 5.775 10.65Q5.1 9.3 5.1 7.575Q5.1 4.675 7.1 2.662Q9.1 0.65 12 0.65Q14.9 0.65 16.9 2.662Q18.9 4.675 18.9 7.575Q18.9 9.3 18.225 10.65Q17.55 12 16.638 13.238Q15.725 14.475 14.788 15.75Q13.85 17.025 13.35 18.6Q13.225 19.025 12.85 19.3Q12.475 19.575 12 19.575ZM12 9.775Q12.925 9.775 13.575 9.137Q14.225 8.5 14.225 7.575Q14.225 6.65 13.575 6Q12.925 5.35 12 5.35Q11.075 5.35 10.425 6Q9.775 6.65 9.775 7.575Q9.775 8.5 10.438 9.137Q11.1 9.775 12 9.775ZM4.425 23.525H19.575V20.375H4.425Z"/>
    </Icon>
  )
});

export default IconMaterialPinDropSharpW700Filled;
