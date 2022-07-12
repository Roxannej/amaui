import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSwitchRightRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchRightRoundedW700'
      short_name='SwitchRight'

      {...props}
    >
      <path d="M16.85 14.1 18.925 12 16.85 9.9ZM16.475 18.725Q15.725 19.475 14.763 19.075Q13.8 18.675 13.8 17.625V6.375Q13.8 5.325 14.763 4.925Q15.725 4.525 16.475 5.275L22.125 10.9Q22.375 11.15 22.488 11.425Q22.6 11.7 22.6 12Q22.6 12.3 22.488 12.575Q22.375 12.85 22.125 13.1ZM7.525 18.725 1.875 13.1Q1.625 12.85 1.525 12.575Q1.425 12.3 1.425 12Q1.425 11.7 1.525 11.425Q1.625 11.15 1.875 10.9L7.525 5.25Q8.275 4.5 9.238 4.912Q10.2 5.325 10.2 6.375V17.625Q10.2 18.675 9.238 19.075Q8.275 19.475 7.525 18.725Z"/>
    </Icon>
  )
});

export default IconMaterialSwitchRightRoundedW700;
