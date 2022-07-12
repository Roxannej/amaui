import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTourRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TourRoundedW700'
      short_name='Tour'

      {...props}
    >
      <path d="M4.55 22.85V2.7Q4.55 2.025 5 1.587Q5.45 1.15 6.125 1.15Q6.825 1.15 7.263 1.587Q7.7 2.025 7.7 2.725V2.925H20.375Q21.225 2.925 21.688 3.625Q22.15 4.325 21.825 5.1L20.225 9L21.825 12.9Q22.15 13.675 21.688 14.375Q21.225 15.075 20.375 15.075H7.7V22.85ZM7.7 6.075V9V11.925ZM12.775 11Q13.6 11 14.188 10.412Q14.775 9.825 14.775 9Q14.775 8.175 14.188 7.587Q13.6 7 12.775 7Q11.95 7 11.363 7.587Q10.775 8.175 10.775 9Q10.775 9.825 11.363 10.412Q11.95 11 12.775 11ZM7.7 11.925H18L16.8 9L18 6.075H7.7Z"/>
    </Icon>
  )
});

export default IconMaterialTourRoundedW700;
