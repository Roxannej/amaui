import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDeleteRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeleteRoundedW700Filled'
      short_name='Delete'

      {...props}
    >
      <path d="M6.725 21.85Q5.4 21.85 4.488 20.938Q3.575 20.025 3.575 18.7V6.275Q2.925 6.275 2.463 5.812Q2 5.35 2 4.7Q2 4.05 2.463 3.587Q2.925 3.125 3.575 3.125H8.45Q8.45 2.475 8.913 2.012Q9.375 1.55 10.025 1.55H13.975Q14.625 1.55 15.088 2.012Q15.55 2.475 15.55 3.125H20.425Q21.075 3.125 21.538 3.587Q22 4.05 22 4.7Q22 5.35 21.538 5.812Q21.075 6.275 20.425 6.275V18.7Q20.425 20.025 19.513 20.938Q18.6 21.85 17.275 21.85ZM8.55 15.7Q8.55 16.225 8.925 16.6Q9.3 16.975 9.825 16.975Q10.35 16.975 10.738 16.6Q11.125 16.225 11.125 15.7V9.275Q11.125 8.75 10.738 8.362Q10.35 7.975 9.825 7.975Q9.3 7.975 8.925 8.362Q8.55 8.75 8.55 9.275ZM12.875 15.7Q12.875 16.225 13.262 16.6Q13.65 16.975 14.175 16.975Q14.7 16.975 15.075 16.6Q15.45 16.225 15.45 15.7V9.275Q15.45 8.75 15.075 8.362Q14.7 7.975 14.175 7.975Q13.65 7.975 13.262 8.362Q12.875 8.75 12.875 9.275Z"/>
    </Icon>
  )
});

export default IconMaterialDeleteRoundedW700Filled;
