import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMailOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MailOutlinedW100Filled'
      short_name='Mail'

      {...props}
    >
      <path d="M4.8 18.7Q4.15 18.7 3.725 18.275Q3.3 17.85 3.3 17.2V6.8Q3.3 6.15 3.725 5.725Q4.15 5.3 4.8 5.3H19.2Q19.85 5.3 20.275 5.725Q20.7 6.15 20.7 6.8V17.2Q20.7 17.85 20.275 18.275Q19.85 18.7 19.2 18.7ZM12 11.85 20 6.55 19.6 6 12 11 4.4 6 4 6.55Z"/>
    </Icon>
  )
});

export default IconMaterialMailOutlinedW100Filled;
