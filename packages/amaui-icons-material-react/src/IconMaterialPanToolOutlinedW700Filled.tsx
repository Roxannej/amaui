import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPanToolOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanToolOutlinedW700Filled'
      short_name='PanTool'

      {...props}
    >
      <path d="M11.5 24Q10.175 24 9.15 23.587Q8.125 23.175 7.325 22.375L0.25 15.075L1.925 13.525Q2.45 13.05 3.263 13.075Q4.075 13.1 4.65 13.45L7.25 14.925V3.95Q7.25 3.25 7.7 2.8Q8.15 2.35 8.85 2.35Q9.55 2.35 10 2.8Q10.45 3.25 10.45 3.95V11.375H11.45V1.6Q11.45 0.9 11.9 0.45Q12.35 0 13.05 0Q13.75 0 14.188 0.45Q14.625 0.9 14.625 1.6V11.375H15.625V2.525Q15.625 1.825 16.075 1.375Q16.525 0.925 17.225 0.925Q17.925 0.925 18.375 1.375Q18.825 1.825 18.825 2.525V11.375H19.825V5.325Q19.825 4.625 20.275 4.175Q20.725 3.725 21.425 3.725Q22.125 3.725 22.575 4.175Q23.025 4.625 23.025 5.325V19.225Q23.025 21.375 21.713 22.688Q20.4 24 18.25 24Z"/>
    </Icon>
  )
});

export default IconMaterialPanToolOutlinedW700Filled;
