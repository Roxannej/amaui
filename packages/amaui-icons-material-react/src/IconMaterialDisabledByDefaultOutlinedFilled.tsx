import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDisabledByDefaultOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DisabledByDefaultOutlinedFilled'
      short_name='DisabledByDefault'

      {...props}
    >
      <path d="M8.4 17 12 13.4 15.6 17 17 15.6 13.4 12 17 8.4 15.6 7 12 10.6 8.4 7 7 8.4 10.6 12 7 15.6ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21Z"/>
    </Icon>
  )
});

export default IconMaterialDisabledByDefaultOutlinedFilled;