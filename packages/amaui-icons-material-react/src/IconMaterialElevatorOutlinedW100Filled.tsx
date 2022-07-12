import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialElevatorOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElevatorOutlinedW100Filled'
      short_name='Elevator'

      {...props}
    >
      <path d="M8.15 17.35H9.85V13.6H10.85V11Q10.85 10.425 10.463 10.037Q10.075 9.65 9.5 9.65H8.5Q7.925 9.65 7.538 10.037Q7.15 10.425 7.15 11V13.6H8.15ZM9 8.75Q9.425 8.75 9.713 8.462Q10 8.175 10 7.75Q10 7.325 9.713 7.037Q9.425 6.75 9 6.75Q8.575 6.75 8.288 7.037Q8 7.325 8 7.75Q8 8.175 8.288 8.462Q8.575 8.75 9 8.75ZM13.925 10.35H16.575L15.25 8.225ZM15.25 15.775 16.575 13.65H13.925ZM5.8 19.7Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H18.2Q18.85 4.3 19.275 4.725Q19.7 5.15 19.7 5.8V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7Z"/>
    </Icon>
  )
});

export default IconMaterialElevatorOutlinedW100Filled;
