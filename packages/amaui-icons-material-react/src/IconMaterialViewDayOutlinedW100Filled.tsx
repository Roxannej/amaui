import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewDayOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewDayOutlinedW100Filled'
      short_name='ViewDay'

      {...props}
    >
      <path d="M4.3 6.3V5.6H19.7V6.3ZM5.8 14.7Q5.15 14.7 4.725 14.275Q4.3 13.85 4.3 13.2V10.8Q4.3 10.15 4.725 9.725Q5.15 9.3 5.8 9.3H18.2Q18.85 9.3 19.275 9.725Q19.7 10.15 19.7 10.8V13.2Q19.7 13.85 19.275 14.275Q18.85 14.7 18.2 14.7ZM4.3 18.4V17.7H19.7V18.4Z"/>
    </Icon>
  )
});

export default IconMaterialViewDayOutlinedW100Filled;
