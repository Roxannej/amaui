import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDisabledByDefaultOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DisabledByDefaultOutlinedW100Filled'
      short_name='DisabledByDefault'

      {...props}
    >
      <path d="M8.4 16.075 12 12.475 15.6 16.075 16.075 15.6 12.475 12 16.075 8.4 15.6 7.925 12 11.525 8.4 7.925 7.925 8.4 11.525 12 7.925 15.6ZM5 19.7Q4.725 19.7 4.513 19.487Q4.3 19.275 4.3 19V5Q4.3 4.725 4.513 4.512Q4.725 4.3 5 4.3H19Q19.275 4.3 19.488 4.512Q19.7 4.725 19.7 5V19Q19.7 19.275 19.488 19.487Q19.275 19.7 19 19.7Z"/>
    </Icon>
  )
});

export default IconMaterialDisabledByDefaultOutlinedW100Filled;
