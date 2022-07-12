import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoFoodOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoFoodOutlinedW700Filled'
      short_name='NoFood'

      {...props}
    >
      <path d="M21.25 24.225 12.05 15H0.225Q0.225 12.7 1.838 11.125Q3.45 9.55 6.175 9.125L0.55 3.5L2.225 1.825L22.925 22.55ZM1.625 23.775Q1 23.775 0.613 23.387Q0.225 23 0.225 22.375V21H15.225V22.375Q15.225 23 14.85 23.387Q14.475 23.775 13.85 23.775ZM0.225 19.375V16.625H15.225V19.375ZM19.85 16.625 10.875 7.75 10.475 4.225H15.5V0.225H18.275V4.225H23.775Z"/>
    </Icon>
  )
});

export default IconMaterialNoFoodOutlinedW700Filled;