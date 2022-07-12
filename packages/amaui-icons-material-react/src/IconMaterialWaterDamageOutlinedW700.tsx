import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWaterDamageOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterDamageOutlinedW700'
      short_name='WaterDamage'

      {...props}
    >
      <path d="M4.625 20.375V12.375H1L12 2.5L23 12.375H19.375V20.375ZM7.775 17.225H16.225V10.525L12 6.725L7.775 10.525ZM12 16.1Q12.975 16.1 13.675 15.4Q14.375 14.7 14.375 13.725Q14.375 13 13.925 12.1Q13.475 11.2 12 9.075Q10.525 11.2 10.075 12.1Q9.625 13 9.625 13.725Q9.625 14.7 10.325 15.4Q11.025 16.1 12 16.1ZM12 11.85Z"/>
    </Icon>
  )
});

export default IconMaterialWaterDamageOutlinedW700;
