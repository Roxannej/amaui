import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialElevatorOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElevatorOutlinedW700Filled'
      short_name='Elevator'

      {...props}
    >
      <path d="M7.375 18H10.375V14H11.375V11.5Q11.375 10.675 10.788 10.087Q10.2 9.5 9.375 9.5H8.375Q7.55 9.5 6.963 10.087Q6.375 10.675 6.375 11.5V14H7.375ZM8.875 8.5Q9.4 8.5 9.762 8.137Q10.125 7.775 10.125 7.25Q10.125 6.725 9.762 6.362Q9.4 6 8.875 6Q8.35 6 7.987 6.362Q7.625 6.725 7.625 7.25Q7.625 7.775 7.987 8.137Q8.35 8.5 8.875 8.5ZM12.8 11H17.8L15.3 7ZM15.3 17 17.8 13H12.8ZM5.3 21.85Q3.975 21.85 3.062 20.938Q2.15 20.025 2.15 18.7V5.3Q2.15 3.975 3.062 3.062Q3.975 2.15 5.3 2.15H18.7Q20.025 2.15 20.938 3.062Q21.85 3.975 21.85 5.3V18.7Q21.85 20.025 20.938 20.938Q20.025 21.85 18.7 21.85Z"/>
    </Icon>
  )
});

export default IconMaterialElevatorOutlinedW700Filled;
