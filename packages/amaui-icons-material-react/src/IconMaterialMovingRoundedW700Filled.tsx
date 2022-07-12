import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMovingRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovingRoundedW700Filled'
      short_name='Moving'

      {...props}
    >
      <path d="M2.5 17.575Q2.1 17.175 2.1 16.6Q2.1 16.025 2.5 15.625L7.1 11.025Q8.1 10.025 9.5 10.025Q10.9 10.025 11.9 11.025L13.05 12.175Q13.25 12.375 13.488 12.375Q13.725 12.375 13.925 12.175L17.725 8.375H17.075Q16.5 8.375 16.1 7.975Q15.7 7.575 15.7 7Q15.7 6.425 16.1 6.025Q16.5 5.625 17.075 5.625H20.875Q21.525 5.625 21.988 6.088Q22.45 6.55 22.45 7.2V11Q22.45 11.575 22.05 11.975Q21.65 12.375 21.075 12.375Q20.5 12.375 20.1 11.975Q19.7 11.575 19.7 11V10.35L15.875 14.15Q14.875 15.15 13.475 15.15Q12.075 15.15 11.075 14.15L9.9 12.975Q9.7 12.775 9.475 12.775Q9.25 12.775 9.05 12.975L4.45 17.575Q4.05 17.975 3.475 17.975Q2.9 17.975 2.5 17.575Z"/>
    </Icon>
  )
});

export default IconMaterialMovingRoundedW700Filled;
