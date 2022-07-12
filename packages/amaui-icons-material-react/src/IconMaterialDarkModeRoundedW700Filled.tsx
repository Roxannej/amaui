import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDarkModeRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DarkModeRoundedW700Filled'
      short_name='DarkMode'

      {...props}
    >
      <path d="M12.025 21.375Q7.975 21.375 5.3 18.712Q2.625 16.05 2.625 12Q2.625 8.975 4.325 6.437Q6.025 3.9 9.375 3Q10.525 2.65 11.225 3.175Q11.925 3.7 11.825 4.725Q11.725 5.275 11.625 5.75Q11.525 6.225 11.525 6.7Q11.525 9.125 13.238 10.825Q14.95 12.525 17.4 12.525Q17.9 12.525 18.413 12.462Q18.925 12.4 19.4 12.3Q20.325 12.225 20.838 12.8Q21.35 13.375 21 14.525Q20.2 17.6 17.713 19.488Q15.225 21.375 12.025 21.375Z"/>
    </Icon>
  )
});

export default IconMaterialDarkModeRoundedW700Filled;
