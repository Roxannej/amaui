import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddTaskOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddTaskOutlinedW700'
      short_name='AddTask'

      {...props}
    >
      <path d="M18.425 20.575V17.575H15.425V14.425H18.425V11.425H21.575V14.425H24.575V17.575H21.575V20.575ZM12 22.85Q9.725 22.85 7.75 22Q5.775 21.15 4.312 19.688Q2.85 18.225 2 16.25Q1.15 14.275 1.15 12Q1.15 9.725 2 7.75Q2.85 5.775 4.312 4.312Q5.775 2.85 7.75 2Q9.725 1.15 12 1.15Q13.625 1.15 15.075 1.575Q16.525 2 17.8 2.8L15.475 5.15Q14.675 4.75 13.812 4.525Q12.95 4.3 12 4.3Q8.8 4.3 6.55 6.537Q4.3 8.775 4.3 12Q4.3 15.225 6.55 17.462Q8.8 19.7 12 19.7Q12.65 19.7 13.275 19.587Q13.9 19.475 14.5 19.275L16.9 21.7Q15.775 22.25 14.562 22.55Q13.35 22.85 12 22.85ZM10.525 17.1 5.9 12.475 7.975 10.375 10.525 12.925 20.75 2.675 22.85 4.775Z"/>
    </Icon>
  )
});

export default IconMaterialAddTaskOutlinedW700;