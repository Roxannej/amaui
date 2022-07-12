import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPostAddOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PostAddOutlinedFilled'
      short_name='PostAdd'

      {...props}
    >
      <path d="M16 9V11H8V9ZM16 12V14H8V12ZM16 15V17H8V15ZM19 3V5H21V7H19V9H17V7H15V5H17V3ZM14 3V5H5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19H19Q19 19 19 19Q19 19 19 19V10H21V19Q21 19.825 20.413 20.413Q19.825 21 19 21H5Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3Z"/>
    </Icon>
  )
});

export default IconMaterialPostAddOutlinedFilled;
