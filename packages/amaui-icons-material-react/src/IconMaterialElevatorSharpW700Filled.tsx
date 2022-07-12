import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialElevatorSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElevatorSharpW700Filled'
      short_name='Elevator'

      {...props}
    >
      <path d="M7.375 18H10.375V14H11.375V9.5H6.375V14H7.375ZM8.875 8.5Q9.4 8.5 9.762 8.137Q10.125 7.775 10.125 7.25Q10.125 6.725 9.762 6.362Q9.4 6 8.875 6Q8.35 6 7.987 6.362Q7.625 6.725 7.625 7.25Q7.625 7.775 7.987 8.137Q8.35 8.5 8.875 8.5ZM12.8 11H17.8L15.3 7ZM15.3 17 17.8 13H12.8ZM2.15 21.85V2.15H21.85V21.85Z"/>
    </Icon>
  )
});

export default IconMaterialElevatorSharpW700Filled;
