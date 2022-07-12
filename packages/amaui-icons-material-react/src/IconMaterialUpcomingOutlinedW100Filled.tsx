import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUpcomingOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UpcomingOutlinedW100Filled'
      short_name='Upcoming'

      {...props}
    >
      <path d="M17.35 10.65 16.85 10.15 19.5 7.5 20 8ZM11.65 8.05V4.35H12.35V8.05ZM6.65 10.65 4 8 4.5 7.5 7.15 10.15ZM4.8 19.7Q4.15 19.7 3.725 19.275Q3.3 18.85 3.3 18.2V14.8Q3.3 14.15 3.725 13.725Q4.15 13.3 4.8 13.3H8Q8.425 14.65 9.525 15.475Q10.625 16.3 12 16.3Q13.425 16.3 14.525 15.475Q15.625 14.65 16 13.3H19.2Q19.85 13.3 20.275 13.725Q20.7 14.15 20.7 14.8V18.2Q20.7 18.85 20.275 19.275Q19.85 19.7 19.2 19.7Z"/>
    </Icon>
  )
});

export default IconMaterialUpcomingOutlinedW100Filled;
