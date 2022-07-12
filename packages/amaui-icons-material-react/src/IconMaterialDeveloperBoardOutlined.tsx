import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDeveloperBoardOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeveloperBoardOutlined'
      short_name='DeveloperBoard'

      {...props}
    >
      <path d="M4 21Q3.175 21 2.588 20.413Q2 19.825 2 19V5Q2 4.175 2.588 3.587Q3.175 3 4 3H18Q18.825 3 19.413 3.587Q20 4.175 20 5V7H22V9H20V11H22V13H20V15H22V17H20V19Q20 19.825 19.413 20.413Q18.825 21 18 21ZM4 19H18Q18 19 18 19Q18 19 18 19V5Q18 5 18 5Q18 5 18 5H4Q4 5 4 5Q4 5 4 5V19Q4 19 4 19Q4 19 4 19ZM6 17H11V13H6ZM12 10H16V7H12ZM6 12H11V7H6ZM12 17H16V11H12ZM4 5Q4 5 4 5Q4 5 4 5V19Q4 19 4 19Q4 19 4 19Q4 19 4 19Q4 19 4 19V5Q4 5 4 5Q4 5 4 5Z"/>
    </Icon>
  )
});

export default IconMaterialDeveloperBoardOutlined;