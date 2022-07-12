import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDeveloperBoardOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeveloperBoardOutlinedFilled'
      short_name='DeveloperBoard'

      {...props}
    >
      <path d="M4 21Q3.175 21 2.588 20.413Q2 19.825 2 19V5Q2 4.175 2.588 3.587Q3.175 3 4 3H18Q18.825 3 19.413 3.587Q20 4.175 20 5V7H22V9H20V11H22V13H20V15H22V17H20V19Q20 19.825 19.413 20.413Q18.825 21 18 21ZM6 17H11V13H6ZM12 10H16V7H12ZM6 12H11V7H6ZM12 17H16V11H12Z"/>
    </Icon>
  )
});

export default IconMaterialDeveloperBoardOutlinedFilled;