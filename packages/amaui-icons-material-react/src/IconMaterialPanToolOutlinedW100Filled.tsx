import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPanToolOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanToolOutlinedW100Filled'
      short_name='PanTool'

      {...props}
    >
      <path d="M12.55 22Q11.925 22 11.312 21.75Q10.7 21.5 10.35 21.15L4.25 15L5.25 14.1Q5.525 13.875 5.75 13.875Q5.975 13.875 6.25 14.025L10.1 16.075V5.175Q10.1 4.725 10.413 4.412Q10.725 4.1 11.175 4.1Q11.625 4.1 11.938 4.412Q12.25 4.725 12.25 5.175V12H12.95V2.875Q12.95 2.425 13.263 2.112Q13.575 1.8 14.025 1.8Q14.475 1.8 14.788 2.112Q15.1 2.425 15.1 2.875V12H15.8V3.775Q15.8 3.325 16.113 3.012Q16.425 2.7 16.875 2.7Q17.325 2.7 17.637 3.012Q17.95 3.325 17.95 3.775V12H18.65V6.525Q18.65 6.075 18.963 5.762Q19.275 5.45 19.725 5.45Q20.175 5.45 20.488 5.762Q20.8 6.075 20.8 6.525V19.3Q20.8 20.425 20.013 21.212Q19.225 22 18.1 22Z"/>
    </Icon>
  )
});

export default IconMaterialPanToolOutlinedW100Filled;
