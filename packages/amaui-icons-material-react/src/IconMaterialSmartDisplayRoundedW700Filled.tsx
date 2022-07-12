import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSmartDisplayRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartDisplayRoundedW700Filled'
      short_name='SmartDisplay'

      {...props}
    >
      <path d="M11.85 15.3 14.9 13.325Q15.625 12.85 15.625 12Q15.625 11.15 14.9 10.675L11.85 8.7Q11.05 8.2 10.238 8.65Q9.425 9.1 9.425 10.025V13.975Q9.425 14.925 10.238 15.362Q11.05 15.8 11.85 15.3ZM4.3 20.85Q2.975 20.85 2.062 19.938Q1.15 19.025 1.15 17.7V6.3Q1.15 4.975 2.062 4.062Q2.975 3.15 4.3 3.15H19.7Q21.025 3.15 21.938 4.062Q22.85 4.975 22.85 6.3V17.7Q22.85 19.025 21.938 19.938Q21.025 20.85 19.7 20.85Z"/>
    </Icon>
  )
});

export default IconMaterialSmartDisplayRoundedW700Filled;
