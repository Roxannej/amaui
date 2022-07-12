import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExitToAppOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExitToAppOutlinedFilled'
      short_name='ExitToApp'

      {...props}
    >
      <path d="M3 13V11H11.65L9.1 8.45L10.5 7L15.5 12L10.5 17L9.1 15.55L11.65 13ZM5 15V19Q5 19 5 19Q5 19 5 19H19Q19 19 19 19Q19 19 19 19V5Q19 5 19 5Q19 5 19 5H5Q5 5 5 5Q5 5 5 5V9H3V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21H5Q4.175 21 3.587 20.413Q3 19.825 3 19V15Z"/>
    </Icon>
  )
});

export default IconMaterialExitToAppOutlinedFilled;