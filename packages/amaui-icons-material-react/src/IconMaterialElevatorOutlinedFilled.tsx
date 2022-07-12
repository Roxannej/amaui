import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialElevatorOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElevatorOutlinedFilled'
      short_name='Elevator'

      {...props}
    >
      <path d="M7 18H10V14H11V11.5Q11 10.675 10.413 10.087Q9.825 9.5 9 9.5H8Q7.175 9.5 6.588 10.087Q6 10.675 6 11.5V14H7ZM8.5 8.5Q9.025 8.5 9.387 8.137Q9.75 7.775 9.75 7.25Q9.75 6.725 9.387 6.362Q9.025 6 8.5 6Q7.975 6 7.613 6.362Q7.25 6.725 7.25 7.25Q7.25 7.775 7.613 8.137Q7.975 8.5 8.5 8.5ZM13 11H18L15.5 7ZM15.5 17 18 13H13ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21Z"/>
    </Icon>
  )
});

export default IconMaterialElevatorOutlinedFilled;
