import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPinDropOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinDropOutlinedW700Filled'
      short_name='PinDrop'

      {...props}
    >
      <path d="M12 19.125Q8.2 16.3 6.312 13.688Q4.425 11.075 4.425 8.575Q4.425 6.675 5.113 5.225Q5.8 3.775 6.888 2.8Q7.975 1.825 9.325 1.337Q10.675 0.85 12 0.85Q13.325 0.85 14.675 1.337Q16.025 1.825 17.113 2.8Q18.2 3.775 18.888 5.225Q19.575 6.675 19.575 8.575Q19.575 11.075 17.688 13.688Q15.8 16.3 12 19.125ZM12 11Q13.075 11 13.825 10.238Q14.575 9.475 14.575 8.425Q14.575 7.35 13.825 6.6Q13.075 5.85 12 5.85Q10.95 5.85 10.188 6.6Q9.425 7.35 9.425 8.425Q9.425 9.475 10.188 10.238Q10.95 11 12 11ZM4.425 23.15V20H19.575V23.15Z"/>
    </Icon>
  )
});

export default IconMaterialPinDropOutlinedW700Filled;
