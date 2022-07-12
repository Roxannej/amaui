import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWaterDamageRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterDamageRoundedW700'
      short_name='WaterDamage'

      {...props}
    >
      <path d="M6.2 20.375Q5.55 20.375 5.088 19.913Q4.625 19.45 4.625 18.8V12.375H3.1Q2.55 12.375 2.35 11.863Q2.15 11.35 2.575 10.975L10.95 3.45Q11.4 3.025 12 3.025Q12.6 3.025 13.05 3.45L21.425 10.975Q21.85 11.35 21.663 11.863Q21.475 12.375 20.9 12.375H19.375V18.8Q19.375 19.45 18.913 19.913Q18.45 20.375 17.8 20.375ZM7.775 17.225H16.225V10.525L12 6.725L7.775 10.525ZM12 11.85ZM12 16.2Q13.075 16.2 13.825 15.45Q14.575 14.7 14.575 13.625Q14.575 12.975 14.238 12.2Q13.9 11.425 12.875 9.9Q12.675 9.625 12.463 9.5Q12.25 9.375 12 9.375Q11.75 9.375 11.538 9.5Q11.325 9.625 11.125 9.9Q10.1 11.425 9.763 12.2Q9.425 12.975 9.425 13.625Q9.425 14.7 10.175 15.45Q10.925 16.2 12 16.2Z"/>
    </Icon>
  )
});

export default IconMaterialWaterDamageRoundedW700;
