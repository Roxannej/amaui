import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWeekendRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WeekendRoundedW700Filled'
      short_name='Weekend'

      {...props}
    >
      <path d="M4 20.775Q2.425 20.775 1.325 19.675Q0.225 18.575 0.225 17V12Q0.225 11.025 0.938 10.325Q1.65 9.625 2.625 9.625Q3.6 9.625 4.3 10.325Q5 11.025 5 12V16H19V12Q19 11.025 19.7 10.325Q20.4 9.625 21.375 9.625Q22.35 9.625 23.062 10.325Q23.775 11.025 23.775 12V17Q23.775 18.575 22.675 19.675Q21.575 20.775 20 20.775ZM7 14V12Q7 10.4 5.912 9.212Q4.825 8.025 3.225 7.675V7Q3.225 5.425 4.325 4.325Q5.425 3.225 7 3.225H17Q18.575 3.225 19.675 4.325Q20.775 5.425 20.775 7V7.675Q19.125 7.85 18.062 9.1Q17 10.35 17 12V14Z"/>
    </Icon>
  )
});

export default IconMaterialWeekendRoundedW700Filled;
