import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExplicitOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExplicitOutlinedFilled'
      short_name='Explicit'

      {...props}
    >
      <path d="M9 17H15V15H11V13H15V11H11V9H15V7H9ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21Z"/>
    </Icon>
  )
});

export default IconMaterialExplicitOutlinedFilled;
