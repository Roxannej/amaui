import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBadgeOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BadgeOutlinedW100Filled'
      short_name='Badge'

      {...props}
    >
      <path d="M14 13.5H18V12.8H14ZM14 15.7H18V15H14ZM13.7 8.3H19.2Q19.85 8.3 20.275 8.725Q20.7 9.15 20.7 9.8V19.2Q20.7 19.85 20.275 20.275Q19.85 20.7 19.2 20.7H4.8Q4.15 20.7 3.725 20.275Q3.3 19.85 3.3 19.2V9.8Q3.3 9.15 3.725 8.725Q4.15 8.3 4.8 8.3H10.3V4Q10.3 3.7 10.5 3.5Q10.7 3.3 11 3.3H13Q13.3 3.3 13.5 3.5Q13.7 3.7 13.7 4ZM11 9H13V4H11ZM9 15Q9.45 15 9.775 14.675Q10.1 14.35 10.1 13.9Q10.1 13.45 9.775 13.125Q9.45 12.8 9 12.8Q8.55 12.8 8.225 13.125Q7.9 13.45 7.9 13.9Q7.9 14.35 8.225 14.675Q8.55 15 9 15ZM6.4 17.25H11.6V17.2Q11.6 16.875 11.425 16.6Q11.25 16.325 10.95 16.2Q10.525 16 10.025 15.9Q9.525 15.8 9 15.8Q8.475 15.8 7.975 15.9Q7.475 16 7.05 16.2Q6.75 16.325 6.575 16.6Q6.4 16.875 6.4 17.2Z"/>
    </Icon>
  )
});

export default IconMaterialBadgeOutlinedW100Filled;
