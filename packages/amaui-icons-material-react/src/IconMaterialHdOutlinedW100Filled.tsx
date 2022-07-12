import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHdOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdOutlinedW100Filled'
      short_name='Hd'

      {...props}
    >
      <path d="M6.8 14.6H7.5V12.6H10.3V14.6H11V9.4H10.3V11.9H7.5V9.4H6.8ZM13 14.6H16.1Q16.55 14.6 16.875 14.275Q17.2 13.95 17.2 13.5V10.5Q17.2 10.05 16.875 9.725Q16.55 9.4 16.1 9.4H13ZM13.7 13.9V10.1H16.1Q16.25 10.1 16.375 10.225Q16.5 10.35 16.5 10.5V13.5Q16.5 13.65 16.375 13.775Q16.25 13.9 16.1 13.9ZM4.8 18.7Q4.15 18.7 3.725 18.275Q3.3 17.85 3.3 17.2V6.8Q3.3 6.15 3.725 5.725Q4.15 5.3 4.8 5.3H19.2Q19.85 5.3 20.275 5.725Q20.7 6.15 20.7 6.8V17.2Q20.7 17.85 20.275 18.275Q19.85 18.7 19.2 18.7Z"/>
    </Icon>
  )
});

export default IconMaterialHdOutlinedW100Filled;