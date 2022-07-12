import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialParkRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ParkRoundedW700Filled'
      short_name='Park'

      {...props}
    >
      <path d="M12 22.85Q11.025 22.85 10.325 22.15Q9.625 21.45 9.625 20.475V18.85H4.375Q3.425 18.85 2.988 18.025Q2.55 17.2 3.075 16.4L5.425 12.85H5.4Q4.875 12.5 4.75 11.787Q4.625 11.075 5.125 10.375L10.725 2.4Q10.975 2.05 11.3 1.887Q11.625 1.725 12 1.725Q12.375 1.725 12.7 1.887Q13.025 2.05 13.275 2.4L18.875 10.375Q19.375 11.075 19.25 11.787Q19.125 12.5 18.6 12.85H18.575L20.925 16.4Q21.45 17.2 21.013 18.025Q20.575 18.85 19.625 18.85H14.375V20.475Q14.375 21.45 13.675 22.15Q12.975 22.85 12 22.85Z"/>
    </Icon>
  )
});

export default IconMaterialParkRoundedW700Filled;
