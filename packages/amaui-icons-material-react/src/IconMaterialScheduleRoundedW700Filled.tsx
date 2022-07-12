import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScheduleRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScheduleRoundedW700Filled'
      short_name='Schedule'

      {...props}
    >
      <path d="M13.95 15.9Q14.35 16.3 14.913 16.3Q15.475 16.3 15.9 15.875Q16.325 15.475 16.325 14.912Q16.325 14.35 15.9 13.925L13.375 11.4V8.475Q13.375 7.9 12.975 7.512Q12.575 7.125 12 7.125Q11.425 7.125 11.025 7.525Q10.625 7.925 10.625 8.5V11.9Q10.625 12.225 10.738 12.5Q10.85 12.775 11.1 13.025ZM12 22.85Q9.725 22.85 7.75 22Q5.775 21.15 4.312 19.688Q2.85 18.225 2 16.25Q1.15 14.275 1.15 12Q1.15 9.725 2 7.75Q2.85 5.775 4.312 4.312Q5.775 2.85 7.75 2Q9.725 1.15 12 1.15Q14.275 1.15 16.25 2Q18.225 2.85 19.688 4.312Q21.15 5.775 22 7.75Q22.85 9.725 22.85 12Q22.85 14.275 22 16.25Q21.15 18.225 19.688 19.688Q18.225 21.15 16.25 22Q14.275 22.85 12 22.85Z"/>
    </Icon>
  )
});

export default IconMaterialScheduleRoundedW700Filled;
