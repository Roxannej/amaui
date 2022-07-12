import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlashAutoRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashAutoRoundedW700Filled'
      short_name='FlashAuto'

      {...props}
    >
      <path d="M15.875 9.05Q15.3 9.05 15.025 8.675Q14.75 8.3 14.95 7.775L17.175 1.275Q17.3 0.875 17.7 0.6Q18.1 0.325 18.525 0.325Q18.95 0.325 19.35 0.6Q19.75 0.875 19.9 1.275L22.125 7.725Q22.325 8.275 22.038 8.662Q21.75 9.05 21.175 9.05Q20.85 9.05 20.562 8.825Q20.275 8.6 20.175 8.3L19.8 7.05H17.225L16.85 8.325Q16.75 8.625 16.475 8.837Q16.2 9.05 15.875 9.05ZM17.625 5.45H19.425L18.575 2.425H18.5ZM6.15 21.2Q5.825 21.75 5.238 21.575Q4.65 21.4 4.65 20.775V13.475H3.225Q2.575 13.475 2.113 13.012Q1.65 12.55 1.65 11.9V2.05Q1.65 1.4 2.113 0.937Q2.575 0.475 3.225 0.475H10.5Q11.375 0.475 11.825 1.187Q12.275 1.9 11.925 2.675L8.925 9.475H10.3Q11.225 9.475 11.663 10.25Q12.1 11.025 11.65 11.825Z"/>
    </Icon>
  )
});

export default IconMaterialFlashAutoRoundedW700Filled;
