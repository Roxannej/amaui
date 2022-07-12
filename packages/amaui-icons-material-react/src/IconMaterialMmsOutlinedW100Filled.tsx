import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMmsOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MmsOutlinedW100Filled'
      short_name='Mms'

      {...props}
    >
      <path d="M7.95 13.1H16.25L13.7 9.7L11.2 12.8L9.6 10.95ZM3.3 19.5V4.8Q3.3 4.15 3.725 3.725Q4.15 3.3 4.8 3.3H19.2Q19.85 3.3 20.275 3.725Q20.7 4.15 20.7 4.8V15.2Q20.7 15.85 20.275 16.275Q19.85 16.7 19.2 16.7H6.1Z"/>
    </Icon>
  )
});

export default IconMaterialMmsOutlinedW100Filled;
